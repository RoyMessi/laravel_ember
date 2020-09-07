import Service from '@ember/service';
import { set } from '@ember/object';

const NOTE_DURATION = 1000 * 7;
const NOTE_DELAY_TIME = 500;
const NOTE_INTERVAL = 500;
let interval;

export default Service.extend({
    items: null,
    init() {
        this._super(...arguments);
        this.set('items', []);
        if(!interval) clearInterval(interval);
        interval = setInterval(()=>{
            const time = Date.now();
            this.get('items').map((item,index)=>{
                this._handleNote(item,index,time)
            });
        }, NOTE_INTERVAL);
    },
    _pushNote(msg,noteType){
        const time = new Date().getTime() + NOTE_DURATION;
        const items = this.get('items');
        items.pushObject({
            id:items.length,
            noteType:noteType,
            message:msg,
            isShown:false,
            aboutToRemove:false,
            delayTime:time + NOTE_DELAY_TIME,
            createdOn:time
        });
    },
    _handleNote(item,index,time){
        if(item.aboutToRemove){
            if(time>=item.delayTime) this.get('items').removeAt(index,1)
        }
        else if(!item.isShown){
            set(item,'noteType',item.noteType);
            set(item,'isShown',true);
        }
        else if(time >= item.createdOn){
            set(item,'aboutToRemove',true);
            set(item,'isShown',false);
        }
    },
    addSuccessNote(msg){
        this._pushNote(msg,'success');
    },
    addErrorNote(msg){
        this._pushNote(msg,'error');
    }
});
