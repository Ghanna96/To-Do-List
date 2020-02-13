import { format } from 'date-fns'
//class to create objects in the to do list

class todo{
    constructor(title,description,date,priority){
        this.title=title;
        this.description=description ? description : '';
        this.duedate=date;
        this.priority=priority;
    }
    getPrio(){
        switch(this.priority){
            case 'none' : return '#fff'
            case 'Casual': return '#e5ffc9'
            case 'Important': return '#fff8c9'
            case 'Urgent': return '#ffc9c9'
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
    get _title(){
       return `${this.title} ( ${this.creationDate} )`
    }
    get _description(){
       if(this.description!=='none'){
           return `Description: ${this.description}`
        }
   }
   
}

export {list,todo};