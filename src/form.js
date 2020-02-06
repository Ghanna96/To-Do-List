import {newButton,newDiv,purgeContent,hide} from './DOM-functions';
import { createList,getToDo,renderToDo} from './manage';

const todoForm=(list)=>{
    const todoForm= newDiv('todo-form');
    const formElements = {
        h4: document.createElement('h4'),
        titleInput: document.createElement('input'),
        descInput: document.createElement('input'),
        dateInput: document.createElement('input'),
        //prioInput: document.createElement('select'),
        buttons: newDiv('buttons')
    };
    const submit= newButton('Add');
    const cancel= newButton('Cancel');
    formElements.h4.textContent = 'Add a New Todo:';
    formElements.dateInput.setAttribute('type', 'date');
    formElements.titleInput.setAttribute('type', 'text');
    formElements.titleInput.setAttribute('placeholder', 'Title');
    formElements.descInput.setAttribute('type', 'text');
    formElements.descInput.setAttribute('placeholder', 'Description');
    formElements.titleInput.id='todo-title';
    formElements.descInput.id='todo-desc';
    formElements.dateInput.id='todo-date';
    for (let element in formElements) {
        todoForm.appendChild(formElements[element])
        formElements[element].style.padding = '1em';
        formElements[element].style.lineHeight= '21px';
    }
    formElements.buttons.appendChild(submit);
    formElements.buttons.appendChild(cancel);
    submit.addEventListener('click',()=>{
        list.toDo.push(getToDo());
        todoForm.remove();
        hide(document.querySelector('#add-todo'));
        renderToDo(list);
    });
    cancel.addEventListener('click',()=>{
        todoForm.remove();
        hide(document.querySelector('#add-todo'));
    });
    return todoForm
}

const listForm=()=>{
    const formElements =`
                        <h4>List Title</h4>
                        <input type="text" id="title">   
                        <h4>Description(Optional)</h4>
                        <input type="text" id="description">
                        <div>   
                        <button id="submit"> submit</button>
                        <button id="cancel"> cancel</button>
                        </div>`;
    // let div= document.querySelector('.add-list');
    let div = newDiv('popUp');
    let content= newDiv('popUpContent');
    content.innerHTML=formElements;
    div.appendChild(content);
    document.querySelector('#content').appendChild(div);
    //purge list html
    document.querySelector('#cancel').addEventListener('click',()=>{
       div.remove();
    });
    document.querySelector('#submit').addEventListener('click',()=>{
        createList();
       div.remove();
    });
    //create new list
}
export {todoForm,listForm}
