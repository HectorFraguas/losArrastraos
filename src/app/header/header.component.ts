import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from '../registrarse.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  isCollapsed: boolean

  constructor(public registrarseService: RegistrarseService) { }

  ngOnInit() {
    this.isCollapsed = true
  }
}
