import {newButton,newDiv,displayLists} from './DOM-functions'

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
    for(let i in mainEl){ //attaching sections
        bodyEl.main.appendChild(mainEl[i]);
    }
    for(let i in listEl){
        mainEl.lists.appendChild(listEl[i]);
    }
    //adding events
     listEl.listButton.addEventListener('click',()=>{
        listForm();
     })
     displayLists();
}




// let todoButton= newButton('Add to do', 'add-todo');
// mainEl.todos.appendChild(todoButton);

// todoButton.classList.add("hvr-rectangle-out");

export {loadPage}