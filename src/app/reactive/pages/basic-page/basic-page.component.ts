import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

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

  ngOnInit(): void {
    /**
     * Esto serviría para inicializar el formulario con unos valores ya cargados
     * por ejemplo, valores que pudiesemos recibir de un servicio del backend,
     * una vez recibido se inicializa el formulario con estos valores
     */
    this.myForm.reset(rtx5090);
  }

  // Posteo de la información
  onSave(): void {

    // Si el formulario es inválido
    if(this.myForm.invalid) return;

    console.log(this.myForm.value);

    // Restablecer formulario a su valor pristine y untouched (inicial)
    this.myForm.reset();

    // Esto hace un reset del formulario con los valores dados
    // this.myForm.reset({
    //   price: 10,
    //   inStorage: 0,
    // });

  }

}
