import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.get('store').findAll('task');
        // return [
        //     {id:1,text:"Task 1",is_completed:false},
        //     {id:2,text:"Task 2232323",is_completed:true},
        //     {id:3,text:"Task ********3",is_completed:false}
        // ];
    }
});
