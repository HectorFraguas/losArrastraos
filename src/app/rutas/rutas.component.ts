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

    this.activatedRoute.params.subscribe( params => { 
      this.eventosService.getRuta(params.id).subscribe((res) => {
        console.log(res)
        if(res.length == 0){
          this.router.navigate(['/eventos'])
        }
        else{
          this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
          this.ruta = res
        }
      })
    })
   }

  ngOnInit() {
    
  }

  getRuta(id) {
    this.eventosService.getRuta(id).subscribe((res) => {
      this.ruta = res
    })
  }

  eliminarRuta(id){
    this.eventosService.deletedRuta(id).subscribe((res) => {
      this.router.navigate(['/eventos'])
    })
  }
}
