import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioMiembrosService } from '../formulario-miembros.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'


@Component({
  selector: 'app-formulario-miembro',
  templateUrl: './formulario-miembro.component.html',
  styleUrls: ['./formulario-miembro.component.css']
})
export class FormularioMiembroComponent implements OnInit {

  formRegistro: FormGroup

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  urlImagen: string
  
 

  constructor(private formulariomiembroservice: FormularioMiembrosService,
    private router: Router, private storage: AngularFireStorage) { }

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
      ], [
        this.validarImagen.bind(this)
      ])
    })
  }

  validarImagen(group) {
    if (this.urlImagen) {
      return null
    }
    else {
      return { imagen: 'La imagen es obligatoria' }
    }
  }

  enviarSocio(){
    this.formRegistro.value.foto = this.urlImagen
    this.formulariomiembroservice.agregarMiembro(this.formRegistro.value).subscribe((res) => {
     
      this.router.navigate(['/quienes-somos'])
    })
  }

  onChangeImagen($event) {
    let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const image = $event.target.files[0]
    const filePath = `socios/${token}.jpg`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, image);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          console.log(url)
          this.urlImagen = url
         
        })
      })
    )
      .subscribe()
  }
}
