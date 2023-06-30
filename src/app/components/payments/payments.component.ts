import { Component } from '@angular/core';
import { PaymentInfo, PaymentOptions } from './interfaces/payment';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { PaymentsService } from './services/payments.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  payments: any;

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  payment = 'Pagos';
  subscription: any;

  options: PaymentOptions[] = [
    {
      label: 'Activos',
      account: 3,
    },
    {
      label: 'Enviados',
      account: 0,
    },
    {
      label: 'Finalizados',
      account: 0,
    },
    {
      label: 'Pausados',
      account: 0,
    },
  ];

  payInfo: PaymentInfo[] = [
    {
      label: 'Total a pagar',
      info: '$600.000',
      total: 'Total pagos: 3(5facturas)',
    },
    {
      label: 'Por vencer en 7 días',
      info: '8 facturas',
      total: 'Hoy: 4 facturas',
    },
    {
      label: 'Proveedor mayor monto',
      info: 'Clínica de piel',
      total: 'Total: $3.000.000',
    },
    {
      label: 'Categoría más frecuente',
      info: 'Servicios de salud',
      total: 'Frecuencia: 8',
    },
  ];

  constructor(private paymentSevice: PaymentsService) {}

  ngOnInit() {
    this.subscription = this.paymentSevice.getJobs().subscribe((res) => {
      this.payments = res[0];
      console.log('this.payments', this.payments);
    });
  }
}
