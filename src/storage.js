let listArray= getStorage();

//create new list
const addList=(obj)=>{
    listArray.push(obj);
    updateList()
};
//remove list
const removeList=(index)=>{
    listArray.splice(index,1);
    updateList()
};
const editList=(list)=>{
    const edited={
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    };
    list.title= edited.title;
    list.description= edited.description;
    updateList();
};
//add todo
const addToDo= (obj,list) =>{
    list.toDo.push(obj);
    updateList();
};
const editToDo= (list,index,obj)=>{
    list.toDo[index]= obj;
    updateList();
};
//remove todo at index
const removeToDo=(index,list)=>{ 
    list.toDo.splice(index,1);
    updateList();
};
function updateList(){
    localStorage.setItem('listArray', JSON.stringify(listArray));
}
function getStorage(){
    let project=JSON.parse(localStorage.getItem('listArray'));
    return (project===null)? [] : project
}


export{listArray,addList,addToDo,removeList,removeToDo,editToDo,editList};