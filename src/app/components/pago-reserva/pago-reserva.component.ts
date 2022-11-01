import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import PagoReserva from 'src/app/interfaces/pagoReserva.interfaces';
import { PagoReservaService } from 'src/app/services/pago-reserva.service';

@Component({
  selector: 'app-pago-reserva',
  templateUrl: './pago-reserva.component.html',
  styleUrls: ['./pago-reserva.component.css']
})
export class PagoReservaComponent implements OnInit {

  formulario: FormGroup;
  pagoReserva: PagoReserva[];

  constructor(
    private pagoReservaService: PagoReservaService
  ) { 
    this.formulario = new FormGroup({
      nombreCompleto: new FormControl(),
      tarjeta: new FormControl(),
      fechaVencimiento: new FormControl(),
      codigo: new FormControl(),
      nombreTarjeta: new FormControl(),
    })
    this.pagoReserva = [];
  }

  ngOnInit(): void {
    this.pagoReservaService.getPagoReserva().subscribe(pagoReserva => {
      this.pagoReserva = pagoReserva;
    })
  }


  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.pagoReservaService.addPagoReserva(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(pagoReserva: PagoReserva) {
    const response = await this.pagoReservaService.deletePagoReserva(pagoReserva);
    console.log(response);
  }



}
