import { Component,Input, OnInit } from '@angular/core';
import {ChecklistService} from './checklist.service';
import TodoItem from './TodoItemModel';


@Component({
  moduleId: module.id,
  selector: 'checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['checklist.component.css'],
  providers: [ChecklistService]
})

export class ChecklistComponent implements OnInit{
    newItem = new TodoItem;
    public checklistTasks: TodoItem[] = [];

    constructor(private clService:ChecklistService) {}

    ngOnInit() {
        this.checklistTasks = [];
        this.getAllTasks();
        console.log("showme:", this.checklistTasks);
    }

    getAllTasks(){
        this.clService.getTasks()
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                    this.checklistTasks = data;
                    console.log('this.checklistTasks: ' + JSON.stringify(this.checklistTasks));
                    console.log(this.checklistTasks[0].text);
                },
                error => {
                    console.error('Error: ' + error);
                });

    }
    // addItem() {
    //     this.checklistTasks.addItem(this.newItem);
    //     this.newItem = '';
    // }

    sendTask(newItem:TodoItem) {
        this.clService.postTask(newItem)
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                },
                error => {
                    console.error('Error: ' + error);
                });
    }

    addTask(newItem: TodoItem) {
      this.checklistTasks.push(newItem);
      this.sendTask(newItem);
      this.newItem = new TodoItem;

    }

    // setTaskCompleted(index: number){
    //     this.items[index].completed = true;
    // }
    //
    // completeTask(index:number) {
    //     this.checklistTasks.setTaskCompleted(index);
    // }

}
