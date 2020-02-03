import{list} from './classes'

let listArray=[ new list('Default List 1')
                ,new list('Default List 2'),
                new list('Default List 3')
            ];

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
const addToDo= (obj,index) =>{
    listArray[index].toDo.push(obj);
};

//remove todo at index
const removeToDo=(index,list)=>{ 
    list.toDo.splice(index,1);
};

//return todos in a give list
const displayToDo=(list)=>{
    return [...list.toDo]
};

export{listArray,addList,addToDo};