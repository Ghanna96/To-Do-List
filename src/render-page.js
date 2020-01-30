import {newButton,newDiv} from './DOM-functions'

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
    const title= document.createElement('h1'); //page title
    bodyEl.header.appendChild(title);
    bodyEl.header.classList.add('red');
    title.textContent='To-Do List App';
    for(let i in bodyEl){   //page structure
        body.appendChild(bodyEl[i]);
    }
    for(let i in mainEl){ //attaching sections
        bodyEl.main.appendChild(mainEl[i]);
    }

     let listButton= newButton('add new list','add-list');
     listButton.classList.add('hvr-bounce-to-bottom');
     mainEl.lists.appendChild(listButton);

     listButton.addEventListener('click',()=>{
        listForm();
     })
}




// let todoButton= newButton('Add to do', 'add-todo');
// mainEl.todos.appendChild(todoButton);

// todoButton.classList.add("hvr-rectangle-out");

export {loadPage}