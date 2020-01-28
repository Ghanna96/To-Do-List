import {newButton,newDiv} from './DOM-functions'
import { todo } from './classes';

//render the page
const loadPage=()=>{
    const body = document.querySelector('body');
    const bodyEl = {
        header: document.createElement('header'),
        main: newDiv('main')
    };
    const title= document.createElement('h1');
    const list= newDiv('list');
    const todos= newDiv('todo');
    title.textContent='To-Do List App';
    bodyEl.header.classList.add('red');
    bodyEl.header.appendChild(title);
    bodyEl.main.appendChild(list);
    bodyEl.main.appendChild(todos);
    for(let i in bodyEl){
        body.appendChild(bodyEl[i]);
    }
    list.appendChild(newButton('add new list','hvr-bounce-to-bottom'));
    todos.textContent='To do';
}

export {loadPage}