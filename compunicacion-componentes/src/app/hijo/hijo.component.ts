import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() recibeHijo?: string;

  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  

  mensaje: string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  //Contador desde el hijo:

  @Output() incrementarHijo = new EventEmitter<void>();
  @Output() decrementarHijo = new EventEmitter<void>();

  incrementar(){
    this.incrementarHijo.emit();
  }
 
  decrementar(){
    this.decrementarHijo.emit();
  } 

};