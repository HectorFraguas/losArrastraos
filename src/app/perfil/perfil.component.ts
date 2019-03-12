import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  arrUsuarios: any
  token: any

  formRegistro: FormGroup

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  urlImagen: string

  constructor(private router: Router, private usuarioService: UsuarioService, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'))

    this.usuarioService.postUsuario(this.token).subscribe((res) => {
      this.arrUsuarios = res

      if(res[0].imagen == null){
        res[0].imagen = 'https://firebasestorage.googleapis.com/v0/b/losarrastraos-f55f6.appspot.com/o/usuarios%2Fusuario.jpg?alt=media&token=fa1aa5a7-3823-490c-8b59-c7e746bc3ab2'
      }

      this.formRegistro = new FormGroup({
        email: new FormControl(this.arrUsuarios.email)
      })
    })

  }

  onChangeImage($event) {
    let nombreImagen = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const image = $event.target.files[0]
    const filePath = `usuarios/${nombreImagen}.jpg`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, image);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          console.log(this.uploadPercent)
          this.urlImagen = url
        })
      })
    )
      .subscribe()
  }

  enviarImagen(){
    let imagenToken = {
      imagen : this.urlImagen,
      token : JSON.parse(localStorage.getItem('token'))
    }
    console.log(imagenToken)
    this.usuarioService.enviarImagen(imagenToken).subscribe((res) => {
      this.usuarioService.postUsuario(this.token).subscribe((res) => {
        this.arrUsuarios = res
      })
    })
  }


cerrarSesion() {
  localStorage.clear()
  this.router.navigate(['/home'])
}

actualizarUsuario(){
  let valuesUpdate = {
    token: this.token
  }
  if (this.formRegistro.controls.email.dirty) {
    valuesUpdate['email'] = this.formRegistro.value.email
  }
  let valuesUpdateSize = Object.keys(valuesUpdate).length
  if (valuesUpdateSize > 1) {
    this.formRegistro.value.token = JSON.parse(localStorage.getItem('token'))
    this.usuarioService.actualizarUsuario(valuesUpdate).subscribe((res) => {
    })
  } else {
    alert('Para actualizar hay que modificar el email')
  }
}
}
