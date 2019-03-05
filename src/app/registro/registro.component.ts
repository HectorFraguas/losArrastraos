import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from '../registrarse.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup

  constructor(private registrarseservice: RegistrarseService, private router: Router) { }

  ngOnInit() {
    this.formRegistro = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),
      usuario: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      clave: new FormControl('', [
        Validators.required
      ])
    })
  }

  enviarRegistro(){
    this.registrarseservice.enviarRegistro(this.formRegistro.value).subscribe((res) =>{
      this.router.navigate(['/login'])
    })
  }
}
