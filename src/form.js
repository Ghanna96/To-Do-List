import {newButton,newDiv} from './DOM-functions';

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
    const formElements = {
        title: document.createElement('h4'),
        titleInput: document.createElement('input'),
        desc: document.createElement('h4'),
        descInput: document.createElement('textarea')
    }
    const tdlist= document.querySelector('.projects');
    formElements.title.textContent= 'List title';
    formElements.desc.textContent= 'List description (optional)';

    for(let i in formElements){
        tdlist.appendChild(formElements[i]);
    }
}
export {todoForm,listForm}
