import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Si es un componente independiente
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nuevaTarea: string = "";
  listaTareas: string[] = [];

  constructor(private _listaTarea: TareasService) {}

  ngOnInit(): void {
    this.listaTareas = this._listaTarea.getTarea();
  }

  postTarea() {
    this._listaTarea.postTarea(this.nuevaTarea);
    this.nuevaTarea = "";
    this.listaTareas = this._listaTarea.getTarea();
  }

  deleteTarea(index: number) {
    this._listaTarea.deleteTarea(index);
    this.listaTareas = this._listaTarea.getTarea();
  }
}
