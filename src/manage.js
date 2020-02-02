import {addList,listArray} from './storage';
import {list,todo} from './classes';
import {newButton,newDiv,purgeContent} from './DOM-functions';


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

const displayTodos=(index)=>{
    let div= document.querySelector('.todo-list'),
        button= newButton('+','add-todo');
    purgeContent(div);
    div.appendChild(button);
    button.addEventListener('click',()=>{

    })
    // let todos= listArray[index].todos.map((el)=>{
    //     let d= newDiv('todo');
    //     d.textContent= el.title;
    // });

    // for (let i in todos){
    //     div.appendChild(todos[i]);
    // }
}


export {createList,loadLists,displayTodos,listInfo};