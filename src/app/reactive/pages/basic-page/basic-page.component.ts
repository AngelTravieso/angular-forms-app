import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  // Crear formulario reactivo
  // * (valor inicial, validadores síncronos, validadores asíncronos)
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  // * Mismo formulario con FormBuilder

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3), ], ],
    price: [0, [ Validators.required, Validators.min(0), ], ],
    inStorage: [0, [ Validators.required, Validators.min(0), ], ],
  });

  constructor( private fb: FormBuilder) {}

  // Posteo de la información
  onSave(): void {

    // Si el formulario es inválido
    if(this.myForm.invalid) return;

    console.log(this.myForm.value);
  }

}
