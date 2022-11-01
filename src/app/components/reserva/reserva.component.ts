import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Reserva from 'src/app/interfaces/reserva.interface';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  formulario: FormGroup;
  reserva: Reserva[];
  asignarVehiculo: any = ['Auto1', 'Auto2', 'Camioneta'];
  tipoReserva: any = ['Hora', '1/2 hora', 'Estadia'];
  constructor(
    private reservaService: ReservaService
  ) { 
    this.formulario = new FormGroup({
      direccion: new FormControl(),
      horario: new FormControl(),
      asignarVehiculo: new FormControl(),
      tipoReserva: new FormControl()
    })
    this.reserva = [];
  }

  ngOnInit(): void {
    this.reservaService.getReserva().subscribe(reserva => {
      this.reserva = reserva;
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
    const response = await this.reservaService.addReserva(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(reserva: Reserva) {
    const response = await this.reservaService.deleteReserva(reserva);
    console.log(response);
  }


}
