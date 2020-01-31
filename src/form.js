import {newButton,newDiv,purgeContent} from './DOM-functions';
import { createList } from './manage';

const todoForm=()=>{
    const todoForm= newDiv('todo-form');
    const formElements = {
        h4: document.createElement('h4'),
        title: document.createElement('span'),
        titleInput: document.createElement('input'),
        desc: document.createElement('span'),
        descInput: document.createElement('textarea'),
        dueDate: document.createElement('span'),
        dateInput: document.createElement('input'),
        prio: document.createElement('span'),
        prioInput: document.createElement('select'),
        buttons: document.createElement('div'),
    }
    formElements.h4.textContent = 'Add a New Todo:';
    formElements.title.textContent = 'Title:';
    formElements.desc.textContent = 'Description (optional):';
    formElements.dueDate.textContent = 'Due Date (optional):';
    formElements.prio.textContent = 'Priority:';
    formElements.buttons.setAttribute('class', 'buttons');
    formElements.dateInput.setAttribute('type', 'date');
    for (let element in formElements) {
        todoForm.appendChild(formElements[element])
        formElements[element].style.marginBottom = '10px'
    }
    return todoForm
}

const listForm=()=>{
    const formElements =`<h2>New list</h2>
                        <h4>List Title</h4>
                        <input type="text" id="title">   
                        <h4>Description(Optional)</h4>
                        <textarea id="description"></textarea>
                        <div>   
                        <button id="submit"> submit</button>
                        <button id="cancel"> cancel</button>
                        </div>`;
    let div= document.querySelector('.add-list');
    div.innerHTML=formElements;
    //purge list html
    document.querySelector('#cancel').addEventListener('click',()=>{
        purgeContent(div);
    });
    document.querySelector('#submit').addEventListener('click',()=>{
        createList();
        purgeContent(div);
    });
    //create new list

}
export {todoForm,listForm}
