import {addList,listArray,removeList} from './storage';
import {list,todo} from './classes';
import {newButton,newDiv,purgeContent,hide} from './DOM-functions';
import { todoForm } from './form';


//create new object with the data entered
const createList=()=>{
    const lst={
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    };
    let newObj= new list(lst.title,lst.description);
    addList(newObj);
    loadLists();
};
//create new todo with data entered
const getToDo=()=>{
    const td={
        title: document.getElementById('todo-title').value,
        description: document.getElementById('todo-desc').value,
        date: document.getElementById('todo-date').value
    };
    let newObj= new todo(td.title,td.description,td.date);
    return newObj
};

//render lists on DOM 
const loadLists=()=>{
    const listDiv= document.querySelector('.my-lists');
    let divArr= listArray.map((el,i)=>{
        let d= newDiv('list');
        d.textContent=el.title;
        d.id=i;
        return d
    }
    );
    purgeContent(listDiv);
    for (let i  in divArr){
        listDiv.appendChild(divArr[i]);
    }
    document.querySelectorAll('.list').forEach((x)=>{
        x.addEventListener('click',()=>{
            listInfo(x.id);
            displayTodos(x.id);
        })
    });
};
//display list's info
const listInfo=(i)=>{
    const info={
        h3: document.createElement('h3'),
        remove: newButton('Remove list','rmv-list'),
        h4: document.createElement('h4'),
        desc: document.createElement('p'),
        title: document.createElement('h2'),
    }
    const div= document.querySelector('.list-inf');
    purgeContent(div);
    if(!listArray[i]){
        return
    }
    for (let i in info){
        div.appendChild(info[i]);
    }
    
    info.title.textContent='My todos';
    info.h3.textContent=listArray[i].title;
    info.h4.textContent=listArray[i]._date;
    info.desc.textContent= listArray[i]._description;
    info.remove.addEventListener('click', ()=>{
        removeList(i);
        loadLists();
        listInfo(0);
        displayTodos(0);
    })

};
//display when a list is clicked
const displayTodos=(index)=>{
    const tdEl={
        head: newDiv('my-todos'),
        add: newDiv('add'),
    };
    const button= newButton('New to-do','add-todo');
    tdEl.add.appendChild(button);
    const div= document.querySelector('.todo-list');
    purgeContent(div);
    if(!listArray[index]){
        return
    }
    for (let i in tdEl){
        div.appendChild(tdEl[i]);
    }

    button.addEventListener('click',(e)=>{
        hide(e.target);
        tdEl.add.appendChild(todoForm(listArray[index])); //parameter to know the current list
    });
    renderToDo(listArray[index]);
    
}
//render todos
const renderToDo=(list)=>{
    let content= list.toDo.map((x,i)=>{
        let td= newDiv('card');
        td.textContent= x.display();
        td.setAttribute('data-id',i);
        return td
    });
    const div= document.querySelector('.my-todos');
    purgeContent(div);
    content.forEach((x)=>{
        div.appendChild(x);
    });
}

export {createList,loadLists,displayTodos,listInfo,getToDo,renderToDo};