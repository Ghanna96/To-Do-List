import {addList,listArray,addToDo} from './storage';
import {list,todo} from './classes';
import {newButton,newDiv,purgeContent,hide} from './DOM-functions';
import { todoForm } from './form';


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
    const div= document.querySelector('.list-inf');
    const h3= document.createElement('h3');
    const h4= document.createElement('h4');
    const desc= document.createElement('p');
    purgeContent(div);
    h3.textContent=listArray[i].title;
    h4.textContent=listArray[i]._date;
    desc.textContent= listArray[i]._description;
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(desc);
};
//display when a list is clicked
const displayTodos=(index)=>{
    const tdEl={
        button: newButton('New to-do','add-todo')
    };
    const div= document.querySelector('.todo-list');
    purgeContent(div);
    for (let i in tdEl){
        div.appendChild(tdEl[i]);
    }
    renderToDo(listArray[index]);
    tdEl.button.addEventListener('click',()=>{
        hide(tdEl.button);
        div.appendChild(todoForm(listArray[index])); //parameter to know the current list
    });
}
//render todos
const renderToDo=(list)=>{
    let content= list.toDo.map((x)=>{
        let td= newDiv('card');
        td.textContent= x.display();
        return td
    });
    const div= document.querySelector('.todo-list');
    content.forEach((x)=>{
        div.appendChild(x);
    });
}

export {createList,loadLists,displayTodos,listInfo,getToDo,renderToDo};