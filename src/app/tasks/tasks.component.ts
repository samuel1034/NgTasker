import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatButtonModule } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';



export interface Task {
  id: number;
  name: string;
  progress: number;
  color: string;
  completed: boolean; // Add the completed property
}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [MatCheckboxModule, MatFormField, MatLabel, MatTableModule, MatButtonModule, NgIf, MatSelect, MatOption, FormsModule, CommonModule],
  standalone: true,
  providers: []
})
export class TasksComponent {
  showForm = false;
  submitted = false;

  taskName: string = '';
  taskProgress: number | null = null;
  taskColor: string = '';
  tasks: Task[] = []; // List to store tasks
  taskIdCounter: number = 1; // Unique ID counter for tasks

  onSubmit() {
    if (this.taskName && this.taskProgress !== null && this.taskColor) {
      this.submitted = true;

      // Add the new task to the list
      const newTask: Task = {
        id: this.taskIdCounter++, // Increment the ID for uniqueness
        name: this.taskName,
        progress: this.taskProgress,
        color: this.taskColor,
        completed: false
      };
      this.tasks.push(newTask);

      console.log('Task Submitted!', newTask);

      // Clear the form fields
      this.taskName = '';
      this.taskProgress = null;
      this.taskColor = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
}
