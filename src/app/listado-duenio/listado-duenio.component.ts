import { Component, OnInit,AfterViewInit,  ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  cliente: string;
  vehiculo: string;
  patente: string;
  fecha: string;
  tipoReserva: string;
  estado: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {cliente: "Juana Perez", vehiculo: 'FIAT 2015', patente:'ABD325' , fecha: '25/04/2022', tipoReserva: 'POR HORA', estado: 'ESTACIONADO'},
  {cliente: "Juan Rodriguez", vehiculo: 'FIAT 2015', patente:'ABD325', fecha: '25/04/2022', tipoReserva: 'ESTADIA', estado: 'FINALIZADO'},
  {cliente: "Ana gomez", vehiculo: 'FIAT 2015', patente:'ABD325', fecha: '25/04/2022', tipoReserva: 'COCHERA FIJA', estado: 'ESTACIONADO'},
  {cliente: "Ulises aguero", vehiculo: 'FIAT 2015', patente:'ABD325', fecha: '25/04/2022', tipoReserva: 'FRACCION', estado: 'ESTACIONADO'},
  {cliente: "Tomas Lopez", vehiculo: 'FIAT 2015', patente: 'ABD325', fecha: '25/04/2022', tipoReserva: 'POR HORA', estado: 'RESERVA EN CURSO'},
  {cliente: "Florencia suarez", vehiculo: 'FIAT 2015', patente: 'ABD325', fecha: '25/04/2022', tipoReserva: 'ESTADIA', estado: 'ESTACIONADO'},

];


@Component({
  selector: 'app-listado-duenio',
  templateUrl: './listado-duenio.component.html',
  styleUrls: ['./listado-duenio.component.css']
})
export class ListadoDuenioComponent implements AfterViewInit {
 // @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['cliente', 'vehiculo', 'patente','fecha', 'tipoReserva','estado'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

}

  
