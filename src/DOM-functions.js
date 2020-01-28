const newButton= (val,className)=> {
    let but=document.createElement('a');
    but.textContent=val;
    if(className){
        but.classList.add(className);
    }
    but.classList.add('button');
    return but
}

const newDiv=(className)=>{
    let div=document.createElement('div');
    div.classList.add(className);
    return div
}

export {newButton,newDiv}