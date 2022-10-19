import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  Roles: any = ['Auto', 'Moto', 'Camioneta'];
  constructor() { }

  ngOnInit(): void {
  }

}
