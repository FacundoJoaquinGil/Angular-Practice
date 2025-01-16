import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() {  }

  private localStorageKey = "listaTareas"

  //Estructura abstracta de un servicio

  getTarea(){
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];  
  }

  postTarea(tarea: string){
    const tareas = this.getTarea()
    tareas.push(tarea)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  deleteTarea(index: number){
    const tareas = this.getTarea();
    tareas.splice(index, 1) //argumento y cantidad de elementos que se borraran
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }
}
