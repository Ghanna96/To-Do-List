import {newButton,newDiv,purgeContent,hide} from './DOM-functions';
import { createList,getToDo,renderToDo,loadLists} from './manage';
import { addToDo, editToDo,editList } from './storage';

const todoForm=(list,n)=>{
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
    
    if(typeof n == 'number'){
       let ref=list.toDo[n];
        formElements.h4.textContent = 'Edit To-Do:';
        formElements.titleInput.value=ref.title;
        formElements.descInput.value=ref.description;
        formElements.dateInput.value=ref.duedate;
    }
    submit.addEventListener('click',()=>{
        // check if the function is called to edit or to add a todo
        if(typeof n == 'number'){ 
            editToDo(list,n,getToDo());
        }else{
            hide(document.querySelector('#add-todo'));
            addToDo(getToDo(),list);
        }
        todoForm.remove();
        renderToDo(list);
    });
    cancel.addEventListener('click',()=>{
        if(typeof n !== 'number'){ 
            hide(document.querySelector('#add-todo'));
        }
        todoForm.remove();
    });
    return todoForm
}

const listForm=(edit,list)=>{
    const form = {
        h4: document.createElement('h4'),
        titleInput: document.createElement('input'),
        desc: document.createElement('h4'),
        descInput: document.createElement('input'),
        buttons: newDiv('buttons'),
    };
    const submit= newButton('Add','submit');
    const cancel= newButton('Cancel','cancel');
    form.buttons.appendChild(submit);
    form.buttons.appendChild(cancel);
    form.h4.textContent='List Title';
    form.desc.textContent='Description(optional)';
    form.titleInput.id='title';
    form.descInput.id='description';
    let div = newDiv('popUp');
    let content= newDiv('popUpContent');
    for (let el in form){
        content.appendChild(form[el]);
    } 
    div.appendChild(content);
    document.querySelector('#content').appendChild(div);
    if(edit){
        form.titleInput.value= list.title;
        form.descInput.value=list.description;
        document.querySelector('#cancel').addEventListener('click',()=>{
            div.remove();
         });
         document.querySelector('#submit').addEventListener('click',()=>{
            editList(list);
            div.remove();
            loadLists();
         });
        return
    } 

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

// const formElements =`
// <h4>List Title</h4>
// <input type="text" id="title">   
// <h4>Description(Optional)</h4>
// <input type="text" id="description">
// <div>   
// <button id="submit"> submit</button>
// <button id="cancel"> cancel</button>
// </div>`;