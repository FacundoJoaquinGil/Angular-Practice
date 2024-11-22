import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  myForm: FormGroup

  constructor(private form: FormBuilder){

    this.myForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  hasError(controlName: string, errorType: string){
    return this.myForm.get(controlName)?.hasError( errorType) && this.myForm.get(controlName)?.touched
  }
 
  submit(){
    console.log(this.myForm.value)
  }

}
