import { listArray } from './storage';

const newButton= (val,selector)=> {
    let but=document.createElement('a');
    but.textContent=val;
    if(selector){
        but.id=selector;
    }
    but.classList.add('button');
    return but
}

const newDiv=(className)=>{
    let div=document.createElement('div');
    div.classList.add(className);
    return div
}

//render list
const displayLists=()=>{
    let listDiv= document.querySelector('.my-lists');
    let divArr= listArray.map((el,i)=>{
        let d= newDiv('list');
        d.textContent=el.info;
        d.id=i;
        return d
    }
    );
    purgeContent(listDiv);
    for (let i  in divArr){
        listDiv.appendChild(divArr[i]);
    }
};

const renderTodos=(index)=>{
    let div= newDiv('todo-list'),
    button= newButton('+','add-todo');
    let todos= listArray[index].todos.map((el)=>{
        let d= newDiv('todo');
        d.textContent= el.title;
    });
    div.appendChild(button);
    div.appendChild(todos);
    return div
}
const purgeContent=(content)=>{
    while (content.firstChild) {    
        content.removeChild(content.firstChild);
    }
}

export {newButton,newDiv,displayLists,renderTodos,purgeContent}