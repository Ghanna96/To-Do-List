import {newButton,newDiv,purgeContent} from './DOM-functions';
import { createList,getToDo} from './manage';

const todoForm=(list)=>{
    const todoForm= newDiv('todo-form');
    const formElements = {
        h4: document.createElement('h4'),
        title: document.createElement('h5'),
        titleInput: document.createElement('input'),
        desc: document.createElement('h5'),
        descInput: document.createElement('textarea'),
        dueDate: document.createElement('h5'),
        dateInput: document.createElement('input'),
        prio: document.createElement('span'),
        prioInput: document.createElement('select'),
        buttons: newDiv('buttons'),
        submit: newButton('Add'),
        cancel: newButton('Cancel')
    };
    formElements.h4.textContent = 'Add a New Todo:';
    formElements.title.textContent = 'Title:';
    formElements.titleInput.id='todo-title';
    formElements.desc.textContent = 'Description (optional):';
    formElements.dueDate.textContent = 'Due Date (optional):';
    formElements.prio.textContent = 'Priority:';
    formElements.dateInput.setAttribute('type', 'date');
    formElements.titleInput.id='todo-title';
    formElements.descInput.id='todo-desc';
    formElements.dateInput.id='todo-date';
    for (let element in formElements) {
        todoForm.appendChild(formElements[element])
        formElements[element].style.marginBottom = '10px'
    }
    formElements.submit.addEventListener('click',()=>{
        list.toDo.push(getToDo());
        console.log(list);
    });
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
