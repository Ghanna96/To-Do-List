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

export{addList,removeList,editName};