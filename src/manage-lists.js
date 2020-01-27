import {listArray} from './storage.js';



const addList=(obj)=>{
    listArray.push(obj);
};

const removeList=(index)=>{
    listArray.splice(index,1);
};

const editName=(index,newName)=>{
    listArray[index].title= newName;
};

export{addList,removeList,editName};