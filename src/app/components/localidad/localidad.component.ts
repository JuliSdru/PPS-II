import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Localidad from '../../interfaces/localidad.interfaces';
import { LocalidadService } from '../../services/localidad.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  formulario: FormGroup;
  localidades: Localidad[];

  constructor(
    private localidadService: LocalidadService
  ) {
    this.formulario = new FormGroup({
      localidad: new FormControl(),
      direccion: new FormControl()
    })
    this.localidades = [];
   }

  ngOnInit(): void {
    this.localidadService.getLocalidad().subscribe(localidad => {
      this.localidades = localidad;
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
  const response = await this.localidadService.addLocalidad(this.formulario.value);
  console.log(response);
}

async onClickDelete(localidad: Localidad) {
  const response = await this.localidadService.deleteLocalidad(localidad);
  console.log(response);
}


}
