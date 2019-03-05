import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioMiembrosService } from '../formulario-miembros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-miembro',
  templateUrl: './formulario-miembro.component.html',
  styleUrls: ['./formulario-miembro.component.css']
})
export class FormularioMiembroComponent implements OnInit {

  formRegistro: FormGroup
 

  constructor(private formulariomiembroservice: FormularioMiembrosService,
    private router: Router) { 

    
  }

  ngOnInit() {
    this.formRegistro = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),
      moto: new FormControl('', [
        Validators.required,
      ]),
      cargo: new FormControl('', [
        Validators.required
      ]),
      foto: new FormControl('', [
        Validators.required
      ])
    })
  }

  enviarSocio(){
    this.formulariomiembroservice.agregarMiembro(this.formRegistro.value).subscribe((res) => {
      console.log(this.formRegistro.value)
      this.router.navigate(['/quienes-somos'])
    })
  }

}
