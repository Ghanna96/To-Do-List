import {loadPage} from './render-page';
import {listArray} from './storage';
import {tutorial} from './manage';

if (listArray.length==0){
    tutorial();
}

loadPage();

