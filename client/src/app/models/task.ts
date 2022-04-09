export class Task {

    constructor(_id = '', title = '', description = '', date = '',isCompleted=false) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isCompleted=isCompleted;
       
    }
    _id: string;
    title: string;
    description: string;
    date: string;
    isCompleted:boolean;
}
