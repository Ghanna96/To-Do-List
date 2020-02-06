import {newButton,newDiv} from './DOM-functions'
import {displayTodos,listInfo,loadLists} from './manage'

import{listForm} from './form';


//managing page structure 
const loadPage=()=>{
    const body = document.querySelector('#content');
    const bodyEl = {
        header: document.createElement('header'),
        main: newDiv('main')
    };
    const mainEl={
        lists: newDiv('projects'),
        todos: newDiv('todo')
    };
    const listEl={
        title: document.createElement('section'),
        div:newDiv('my-lists'),
        listButton: newButton('add new list','add-list'),
        formList: newDiv('add-list')
    };
    const todoEl={
        info: newDiv('list-inf'),
        div: newDiv('todo-list')
    }
    //title
    const title= document.createElement('h1'); //page title
    const listTitle= document.createElement('h3');
    title.textContent='To-Do List App';
    listTitle.textContent='My Lists';
    bodyEl.header.appendChild(title);
    listEl.title.appendChild(listTitle);
    //adding classes
    listEl.listButton.classList.add('hvr-bounce-to-bottom');
    //appending elements
    for(let i in bodyEl){   //page structure
        body.appendChild(bodyEl[i]);
    }
    //attaching sections
    for(let i in mainEl){ 
        bodyEl.main.appendChild(mainEl[i]);
    }
    //populating list section
    for(let i in listEl){ 
        mainEl.lists.appendChild(listEl[i]);
    }
    //populating todo section
    for (let i in todoEl){
        mainEl.todos.appendChild(todoEl[i])
    }
    
    //adding events
    listEl.listButton.addEventListener('click',()=>{
        listForm();
    })
    loadLists();

    document.querySelectorAll('.list').forEach((x)=>{
        x.addEventListener('click',()=>{
            listInfo(x.id);
            displayTodos(x.id);
        })
    });
}


export {loadPage}