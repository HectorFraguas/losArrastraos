import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from '../registrarse.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public registrarseService: RegistrarseService) { }

  ngOnInit() {
  }


}
