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

//add todo
const addToDo= (obj,index) =>{
    listArray[index].toDo.push(obj);
};

//remove todo at index
const removeToDo=(index,list)=>{ 
    list.toDo.splice(index,1);
};



export{listArray,addList,addToDo,removeList,removeToDo};