import { format } from 'date-fns'
//class to create objects in the to do list

class todo{
    constructor(title,description,date,priority,completed){
        this.title=title;
        this.description=description ? description : 'none';
        this.date=date;
        this.priority=priority;
        this.completed=completed;
    }
    set date(date){
        let format= /([0-2]\d{1}|3[0-1])\/(0\d{1}|1[0-2])\/(19|20)\d{2}/g;
        if (date.match(format)){
            this.date=date;
        }else{
            alert('wrong date format. (dd/mm/yyyy)');
            return
        }
    }
}

class list{
    constructor(title,description){
        this.title= title ? title: 'New List' ;
        this.description= description ? description : 'none';
        this.creationDate= format(new Date(), 'dd-MM-yyyy');
        this.toDo=[];
    }
    get info(){
        return `${this.title}  (${this.creationDate})`
    }
}

export {list,todo};