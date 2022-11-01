import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Vehiculo from 'src/app/interfaces/vehiculo.interfaces';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})

export class VehiculosComponent implements OnInit {
  formulario: FormGroup;
  vehiculos: Vehiculo[];
  tipo: any = ['Auto', 'Moto', 'Camioneta'];

  constructor(
    private vehiculoService: VehiculoService
  ) { 
    this.formulario = new FormGroup({
      modelo: new FormControl(),
      patente: new FormControl(),
      color: new FormControl(),
      tipo: new FormControl()
    })
    this.vehiculos = [];
  }

  ngOnInit(): void {
    this.vehiculoService.getVehiculo().subscribe(vehiculo => {
      this.vehiculos = vehiculo;
    })
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.vehiculoService.addVehiculo(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(vehiculo: Vehiculo) {
    const response = await this.vehiculoService.deleteVehiculo(vehiculo);
    console.log(response);
  }

}
