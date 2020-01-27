import {addList,removeList,editName} from './manage-lists';
import {list,todo} from './classes';
import {listArray} from './storage'
let d= new list('yo','there');

addList(d);
console.log(listArray);