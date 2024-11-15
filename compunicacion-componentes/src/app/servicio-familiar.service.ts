import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  preguntarHijo?: string;

  hermanoMayor?: string;
  hermanoMenor?: string;

  saludar(hermano: string){
    console.log(`Hola ${hermano}`)
  }

  preguntar(): string{
    return 'Como esta tu hijo?'
  }

  getHermanoMayor(): string{
    return this.hermanoMayor || '';
  }

  setHermanoMayor(hermano: string){
    this.hermanoMayor = hermano;
  }

  getHermanoMenor(): string{
    return this.hermanoMenor || '';
  }

  setHermanoMenor(hermano: string){
    this.hermanoMenor = hermano;
  }

  constructor() { }
}
