import {listArray} from './storage';
import {list,todo} from './classes';

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

const createList=()=>{
    const lst={
        title: document.getElementById('title').nodeValue,
        description: document.getElementById('description').nodeValue
    };
    let newObj= new list(lst.title,lst.description);
    addList(newObj);
    console.log(listArray);
}


export {createList};