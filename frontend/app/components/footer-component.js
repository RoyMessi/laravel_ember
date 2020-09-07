import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    incompleteTasks:computed('tasks.@each.is_completed',function(){
        return this.get('tasks').filterBy('is_completed',false).length;
    }),
    completedTasks:computed('tasks.@each.is_completed',function(){
        return this.get('tasks').filterBy('is_completed',true).length;
    }),
    totalTasks:computed('tasks.[]',function(){
        return this.get('tasks.length');
    }),
});
