import {newButton,newDiv} from './DOM-functions'
import {displayTodos,listInfo,loadLists} from './manage'

import{listForm} from './form';


//render the page
const loadPage=()=>{
    const body = document.querySelector('body');
    const bodyEl = {
        header: document.createElement('header'),
        main: newDiv('main')
    };
    const mainEl={
        lists: newDiv('projects'),
        todos: newDiv('todo')
    };
    const listEl={
        listButton: newButton('add new list','add-list'),
        formList: newDiv('add-list'),
        div:newDiv('my-lists')
    };
    const todoEl={
        // button: newButton('New To-Do','add-todo'),
        info: newDiv('list-inf'),
        div: newDiv('todo-list')
    }
    //page title
    const title= document.createElement('h1'); //page title
    bodyEl.header.appendChild(title);
    //adding classes
    bodyEl.header.classList.add('red');
    title.textContent='To-Do List App';
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