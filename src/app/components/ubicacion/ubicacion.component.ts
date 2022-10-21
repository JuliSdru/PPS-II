import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Estacionamiento from 'src/app/interfaces/estacionamiento.interfaces';
import { EstacionamientoService } from '../../services/estacionamiento.service';
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  formulario: FormGroup;
  estacionamientos: Estacionamiento[] ;
  constructor(
    private estacionamientoSerive: EstacionamientoService
  ) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      //latitude: new FormControl(),
      //longitude: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      capacidad: new FormControl(),
      horarios: new FormControl()
    })
    this.estacionamientos = [];
  }

  ngOnInit(): void {
    this.estacionamientoSerive.getPlaces().subscribe(estacionamiento => {
      this.estacionamientos = estacionamiento;
    })
  }

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }


  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.estacionamientoSerive.addPlace(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(estacionamiento: Estacionamiento) {
    const response = await this.estacionamientoSerive.deletePlace(estacionamiento);
    console.log(response);
  }


}
