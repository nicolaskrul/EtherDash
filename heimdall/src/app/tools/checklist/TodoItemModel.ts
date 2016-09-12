export default class TodoItemModel {
    _id: any;
    text: String;
    completed: Boolean;
    sublist: TodoItemModel[];

    constructor() {
        this.text = "";
        this.completed = false;
        this.sublist = [];
    }
}
