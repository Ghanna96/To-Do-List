import {listArray} from './storage';

//add todo
const addToDo= (obj,list) =>{
    list.toDo.push(obj);
};

//remove todo at index
const removeToDo=(index,list)=>{ 
    list.toDo.splice(index,1);
};

//return todos in a give list
const displayToDo=(list)=>{
    return [...list.toDo]
};

export {addToDo, removeToDo, displayToDo}