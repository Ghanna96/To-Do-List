import {listArray} from './storage.js';


//create new list
const addList=(obj)=>{
    listArray.push(obj);
};

//remove list
const removeList=(index)=>{
    listArray.splice(index,1);
};

//change list title
const editName=(index,newName)=>{
    listArray[index].title= newName;
};

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

export {addToDo, removeToDo, displayToDo, addList,removeList,editName};