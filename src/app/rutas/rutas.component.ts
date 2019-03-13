import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  ruta: any
  tokenUsuario: any


  constructor(private eventosService: EventosService, private router: Router, private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventosService.getRuta(params.id).subscribe((res) => {
        if (res.length == 0) {
          this.router.navigate(['/eventos'])
        }
        else {
          let tokenAdmin = res['token']
          this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
          console.log(res)
          this.ruta = res
        }
      })
    })
  }

  getRuta(id) {
    this.eventosService.getRuta(id).subscribe((res) => {

      this.ruta = res
    })
  }

  eliminarRuta(id) {
    this.eventosService.deletedRuta(id).subscribe((res) => {
      this.router.navigate(['/eventos'])
    })
  }

  enviarComentario(value) {
    let token = JSON.parse(localStorage.getItem('token'))
    let comentario = value
    let idRuta = this.ruta.idRuta

    this.eventosService.enviarComentario(token, comentario, idRuta).subscribe((res) => {
      this.activatedRoute.params.subscribe(params => {
        this.eventosService.getRuta(params.id).subscribe((res) => {
          if (res.length == 0) {
            this.router.navigate(['/eventos'])
          }
          else {
            let tokenAdmin = res['token']
            this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
            this.ruta = res
          }
        })
      })
    })
  }

  borrarComentario(id) {
    this.eventosService.borrarComentario(id).subscribe((res) => {
      this.activatedRoute.params.subscribe(params => {
        this.eventosService.getRuta(params.id).subscribe((res) => {
          if (res.length == 0) {
            this.router.navigate(['/eventos'])
          }
          else {
            let tokenAdmin = res['token']
            this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
            this.ruta = res
          }
        })
      })
    })
  }
}
