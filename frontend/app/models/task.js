import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('tasks', 'task');
inflector.uncountable('advice');

export default DS.Model.extend({
    text: DS.attr('string'),
    is_completed: DS.attr('boolean'),
});