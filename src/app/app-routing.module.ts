import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LogInComponent } from './log-in/log-in.component';
import { EventosComponent } from './eventos/eventos.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioRutaComponent } from './formulario-ruta/formulario-ruta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'login', component: LogInComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'registrarse', component: RegistroComponent },
  { path: 'formulario-ruta', component: FormularioRutaComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
