import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RegistroComponent } from './components/registro/registro.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ReservaComponent,
    UbicacionComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 //   AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    GoogleMapsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
