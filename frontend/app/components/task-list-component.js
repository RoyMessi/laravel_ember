import Component from '@ember/component';

export default Component.extend({
    actions: {
        onComplete(task){
            this.onComplete(task);
        },
        onDelete(task){
            this.onDelete(task);
        }
    }
});
