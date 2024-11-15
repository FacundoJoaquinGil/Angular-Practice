import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {

  nombre?: string;

  fecha: Date = new Date();

  recibePadre?: string;

  MensajeDesdePadre = 'Comunicacion desde el padre!';

  contador: number = 0;

  constructor(private _servicioFamiliar: ServicioFamiliarService) {} 

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('juan');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }
 
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor());
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntar())
  }

  recibirMensaje($event: string) {
    this.recibePadre = $event;
  } 

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
