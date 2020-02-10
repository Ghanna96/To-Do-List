import {addList,listArray,removeList,removeToDo} from './storage';
import {list,todo} from './classes';
import {newButton,newDiv,newSpan,purgeContent,hide} from './DOM-functions';
import { todoForm, listForm } from './form';


//create new object with the data entered
const createList=()=>{
    const lst={
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    };
    let newObj= new list(lst.title,lst.description);
    addList(newObj);
    loadLists();
};
const editList=(list)=>{
    const edited={
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    };
    list.title= edited.title;
    list.description= edited.description;
};
//create new todo with data entered
const getToDo=()=>{
    const td={
        title: document.getElementById('todo-title').value,
        description: document.getElementById('todo-desc').value,
        date: document.getElementById('todo-date').value
    };
    let newObj= new todo(td.title,td.description,td.date);
    return newObj
};

//render lists on DOM 
const loadLists=()=>{
    const listDiv= document.querySelector('.my-lists');
    let divArr= listArray.map((el,i)=>{
        let d= newDiv('list');
        d.textContent=el.title;
        d.id=i;
        return d
    }
    );
    purgeContent(listDiv);
    for (let i  in divArr){
        listDiv.appendChild(divArr[i]);
    }
    document.querySelectorAll('.list').forEach((x)=>{
        x.addEventListener('click',()=>{
            listInfo(x.id);
            displayTodos(x.id);
        })
    });

};
//display list's info
const listInfo=(i)=>{
    const info={
        h3: document.createElement('h3'),
        remove: newButton('Remove list','rmv-list'),
        edit: newButton('Edit', 'edit-list'),
        h4: document.createElement('h4'),
        desc: document.createElement('p'),
        title: document.createElement('h2'),
    }
    const div= document.querySelector('.list-inf');
    purgeContent(div);
    if(!listArray[i]){
        return
    }
    for (let i in info){
        div.appendChild(info[i]);
    }
    
    info.title.textContent='My todos';
    info.h3.textContent=listArray[i].title;
    info.h4.textContent=listArray[i]._date;
    info.desc.textContent= listArray[i]._description;
    info.remove.addEventListener('click', ()=>{
        removeList(i);
        loadLists();
        listInfo(0);
        displayTodos(0);
    });
    info.edit.addEventListener('click',()=>{
        listForm(true,listArray[i]);
    });
};
//display when a list is clicked
const displayTodos=(index)=>{
    const tdEl={
        head: newDiv('my-todos'),
        add: newDiv('add'),
    };
    const button= newButton('New to-do','add-todo');
    tdEl.add.appendChild(button);
    const div= document.querySelector('.todo-list');
    purgeContent(div);
    if(!listArray[index]){
        return
    }
    for (let i in tdEl){
        div.appendChild(tdEl[i]);
    }

    button.addEventListener('click',(e)=>{
        hide(e.target);
        tdEl.add.appendChild(todoForm(listArray[index],false)); //parameter to know the current list
    });
    renderToDo(listArray[index]);  
}
//render array of nodes with all todos
const renderToDo=(list)=>{
    let content= list.toDo.map((x,i)=>{
        let td= newDiv('card');
        let titDiv= newDiv('info1');
        let descDiv= newDiv('info2');
        let title= newSpan(x.title);
        let date= newSpan(`Due: ${x.duedate}`);
        let desc= newSpan(`Description: ${x.description}`);
        let close=newDiv('close');
        let form= newDiv('form');
        td.appendChild(close);
        titDiv.appendChild(title);
        td.appendChild(titDiv);
        descDiv.appendChild(desc);
        descDiv.appendChild(date);
        td.appendChild(descDiv);
        close.textContent='+';
        td.setAttribute('data-id',i);
        close.addEventListener('click',()=>{
            removeToDo(i,list);
            td.remove();
        });
        titDiv.addEventListener('click',function handle(){
            purgeContent(form);
            form.appendChild(todoForm(list,i));
            td.appendChild(form);
        })
        return td
    });
    const div= document.querySelector('.my-todos');
    purgeContent(div);
    content.forEach((x)=>{
        div.appendChild(x);
    });
}

export {editList,createList,loadLists,displayTodos,listInfo,getToDo,renderToDo};