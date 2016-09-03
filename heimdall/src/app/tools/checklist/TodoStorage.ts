import TodoItem from './TodoItemModel';

export default class TodoStorage {
    items: TodoItem[];

    constructor() {
      this.items = [{
          text: "First task",
          completed: false
      },
      {
          text: "Second task",
          completed: false
      },
      {
          text: "Third task",
          completed: false
      },
      {
          text: "Fourth task",
          completed: false
      }];
    }

    addItem(newItem: String) {
      this.items.push({
        text: newItem,
        completed:false
      });
    }

    setCompletedState(index: number){
        console.log(this.items);
        console.log(index);
        this.items[index].completed = true;
    }
}
