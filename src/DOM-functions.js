//reusable functions for DOM

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


const purgeContent=(content)=>{
    while (content.firstChild) {    
        content.removeChild(content.firstChild);
    }
}

const hide=(element)=>{
    element.classList.toggle('hidden');
}
export {newButton,newDiv,purgeContent,hide}