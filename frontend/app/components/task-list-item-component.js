import Component from '@ember/component';

export default Component.extend({
    actions: {
        onComplete(task){
            this.onComplete(task);
        },
        onDelete(task){
            if(!confirm('Are you sure?')) return false;
            this.onDelete(task);
        }
    }
});
