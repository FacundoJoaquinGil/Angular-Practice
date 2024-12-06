import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

  usuarioActivo: any = {
    nombre: 'Pedro',
    email: 'hola@gmail.com'
  }

  tipoDni: string = "DNI"

  myForm: FormGroup

  constructor(private form: FormBuilder){

    this.myForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dni: [''],
      tipoDni: ['']
    })
  }

  ngOnInit(): void {
    this.myForm.patchValue({
      name: this.usuarioActivo.nombre,
      email: this.usuarioActivo.email,
    })

    this.myForm.get("tipoDni")?.valueChanges.subscribe(value=> {
      this.tipoDni = value
    }
      
    )
    this.myForm.get('name')?.disable()
    this.myForm.get('email')?.disable()
  }

  hasError(controlName: string, errorType: string){
    return this.myForm.get(controlName)?.hasError( errorType) && this.myForm.get(controlName)?.touched
  }
 
  submit(){
    console.log(this.myForm.value)
  }

}
