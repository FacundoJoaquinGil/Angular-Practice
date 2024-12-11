import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnChanges {

  @Input() tipoDni: string = 'DNI';

  variablePrueba: string = 'Primer Cambio';

  formularioDocumento: FormGroup;

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes?.['tipoDni'].currentValue)
    this.variablePrueba = !changes?.['tipoDni'].firstChange
      ? changes?.['tipoDni'].currentValue
      : 'Documento'; //Ternario para distinguir el primer cambio, decimos "Si no es el primer cambio, asigna el valor actual de tipoDni; de lo contrario, asigna Documento"
  }

  hasError(controlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
