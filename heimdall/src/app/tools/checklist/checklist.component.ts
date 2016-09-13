import { Component,Input, OnInit, AfterContentInit } from '@angular/core';
import {ChecklistService} from './checklist.service';
import TodoItem from './TodoItemModel';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder,FormGroup } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['checklist.component.css'],
  providers: [ChecklistService]
})

export class ChecklistComponent implements OnInit{
    @Input() todo:TodoItem;
    newItem = new TodoItem;
    public checklistTasks: TodoItem[] = [];

    constructor(private clService:ChecklistService) {
    }

    ngOnInit() {
        this.checklistTasks = [];
        this.getAllTasks();
    };

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
        newItem.completed = false;
        this.checklistTasks.push(newItem);
        this.sendTask(newItem);
        this.newItem = new TodoItem;
    }

    addSublist(_item: TodoItem) {
        let subitem = new TodoItem;
        subitem._id = _item.sublist.length;
        console.log("parent item: ", _item);
        console.log("subitem: ", subitem);
        _item.sublist.push(subitem);
        console.log("new parent item: ", _item);
        this.updateTask(_item);
    }

    updateTask(updatedItem: TodoItem) {
        console.log("updatedItem: ", updatedItem);
        this.clService.updateTask(updatedItem)
        .subscribe(
            data => {
                console.log("returned data: ", data);
            },
            error => {
                console.error('Error: ' + error);
            });
    }


    completeTask(index: number) {
        console.log(index);
        this.checklistTasks[index].completed = !this.checklistTasks[index].completed;
        this.clService.updateTask(this.checklistTasks[index])
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                },
                error => {
                    console.error('Error: ' + error);
                });
            }

    deleteTask(index: number) {
        console.log(index);
        this.clService.deleteTask(this.checklistTasks[index])
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                    this.getAllTasks();
                },
                error => {
                    console.error('Error: ' + error);
                });
            }

deleteSublistItem(index: number, subIndex: number) {
    var selectedTask = this.checklistTasks[index];

    if (subIndex > -1) {
       selectedTask.sublist.splice(subIndex, 1);
}
    // var editedTask = this.checklistTasks[index][subIndex].pop();
    console.log(index);
    this.clService.updateTask(selectedTask)
        .subscribe(
            data => {
                console.log("returned data: ", data);
                this.getAllTasks();
            },
            error => {
                console.error('Error: ' + error);
            });
        }
    // completeTask(index:number) {
    //     this.checklistTasks.setTaskCompleted(index);
    // }

}
