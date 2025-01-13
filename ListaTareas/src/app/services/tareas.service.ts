import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() {  }

  private localStorageKey = "ListaTarea"

  getTarea(){
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];  
  }

  postTarea(tarea: string){
    const tareas = this.getTarea()
    tareas.push(tarea)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tarea))
  }

}
