import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy{

  usuarioActivo: any = {
    nombre: 'Pedro',
    email: 'hola@gmail.com',
  };

  tipoDni: string = 'DNI';

  myForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.myForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoDni: [''],
    });
  }

 ngOnDestroy(): void {
  console.log('Se destruyó el componente')
 }

  ngOnInit(): void {
    this.myForm.get('name')?.setValue('Joaquin');
    this.myForm.get('name')?.disable();

    // this.myForm.patchValue({
    //   name: this.usuarioActivo.nombre,
    //   email: this.usuarioActivo.email,
    // });

    this.myForm.get('tipoDni')?.valueChanges.subscribe((value) => {
      this.tipoDni = value;
    });
    
    this.myForm.get('email')?.disable();
  }

  hasError(controlName: string, errorType: string) {
    return (
      this.myForm.get(controlName)?.hasError(errorType) &&
      this.myForm.get(controlName)?.touched
    );
  }

  submit() {
    console.log(this.myForm.value);
  }
}
