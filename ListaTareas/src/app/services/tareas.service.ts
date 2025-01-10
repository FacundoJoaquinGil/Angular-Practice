import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'ListaTareas';

  getTareas() {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }


}
