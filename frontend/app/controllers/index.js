import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    notesService: service(),
    actions:{
        addTask(){
            let taksName = prompt('Enter task name','The task name');
            if(!taksName) return false;
            this.get('store').createRecord('task', {
                text: taksName
            }).save().then(()=>{
                this.get('notesService').addSuccessNote('המשימה נוצרה בהצלחה');
            }).catch(()=>{
                this.get('notesService').addErrorNote('קרתה תקלה בעת יצירת המשימה');
            });
        },
        onComplete(task){
            const isCompleted = !task.get('is_completed');
            set(task,'is_completed',isCompleted);
            const host = this.get('store').adapterFor('application').host;
            $.ajax({
                url:`${host}/task/${task.id}`,
                method:'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({"is_completed":isCompleted}),
                success:()=>{
                   this.get('notesService').addSuccessNote('המשימה עודכנה בהצלחה');
                },
                error:()=>{
                   this.get('notesService').addErrorNote('קרתה תקלה בעת עדכון המשימה');
                }
            });
        },
        onDelete(task){
            task.destroyRecord().then(()=>{
                this.get('notesService').addSuccessNote('המשימה נמחקה בהצלחה');
            }).catch(()=>{
                this.get('notesService').addErrorNote('קרתה תקלה בעת מחיקת המשימה');
            });
        }
    }
});
