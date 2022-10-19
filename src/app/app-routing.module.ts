import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'reserva', component: ReservaComponent
  },
  {
    path: 'ubicacion', component: UbicacionComponent
  },
  {
    path: 'vehiculo', component: VehiculosComponent
  }

]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
