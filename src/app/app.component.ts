import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'losArrastraos';

  google_key: any

  constructor(){
    // this.google_key = environment.GOOGLE_KEY
    // console.log(document.getElementsByTagName('head')[0])
    // document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<script src='https://maps.googleapis.com/maps/api/js?key="+this.google_key+"&libraries=places'></script>"
  }
}
