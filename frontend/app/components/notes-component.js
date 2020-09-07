import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
    notesService: service(),
    items:computed('notesService.items.[]',function(){
        return this.get('notesService.items');
    })
});
