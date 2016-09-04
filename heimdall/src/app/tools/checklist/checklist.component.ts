import { Component,Input } from '@angular/core';
import TodoStorage from './TodoStorage';
import TodoItem from './TodoItemModel';

@Component({
  moduleId: module.id,
  selector: 'checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['checklist.component.css'],
  providers: [TodoStorage]
})

export class ChecklistComponent {
    newItem = '';
    checklistStorage: TodoStorage;

    constructor(checklistStorage: TodoStorage) {
        this.checklistStorage = checklistStorage;
    }

    addItem() {
        this.checklistStorage.addItem(this.newItem);
        this.newItem = '';
    }

    completeTask(index:number) {
        this.checklistStorage.setTaskCompleted(index);
    }

}
