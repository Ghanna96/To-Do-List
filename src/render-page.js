

const loadPage=()=>{

    const body = document.querySelector('body');
    const bodyEl = {
        header: document.createElement('header'),
        main: document.createElement('div'),
    };
    const list= document.createElement('div');
    bodyEl.main.classList.add('main');
    bodyEl.header.classList.add('red');
    list.classList.add('green');
    bodyEl.main.appendChild(list);
    for(let i in bodyEl){
        body.appendChild(bodyEl[i]);
    }
}

export {loadPage}