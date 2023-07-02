import { Component } from '@angular/core';
import { PaymentInfo, PaymentOptions } from './interfaces/payment';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { PaymentsService } from './services/payments.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  payments: any;
  totalAmount: any = 0;
  supplierHigherAmount: any = 0;
  frequentCategory: any;
  supplierHigher: string = '';
  category: any;
  expireSeven: number = 0;
  toExpireT: number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'select',
    'payment',
    'supplier',
    'category',
    'expire',
    'price',
    'state',
  ];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);

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
    },
    {
      label: 'Por vencer en 7 días',
    },
    {
      label: 'Proveedor mayor monto',
    },
    {
      label: 'Categoría más frecuente',
    },
  ];

  constructor(private paymentSevice: PaymentsService) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPaymenyts();
  }

  getPaymenyts() {
    this.subscription = this.paymentSevice
      .getPayments()
      .subscribe((res: any) => {
        if (res) {
          this.payments = res[0];
          this.dataSource.data = this.payments;
          this.getTotalAmount(this.payments);
          this.category = this.frequencyCategory(this.payments);
          this.expireSeven = this.toExpire7Days(this.payments);
          this.toExpireT = this.toExpireToday(this.payments);
        }
      });
  }

  getTotalAmount(data: any) {
    data.forEach((element: any, i: number) => {
      if (element.price) {
        this.totalAmount = this.totalAmount + element.price;
      }
      if (element.price > this.supplierHigherAmount) {
        this.supplierHigherAmount = element.price;
        this.supplierHigher = element.supplier;
      }
    });
  }

  frequencyCategory(arr: any[]) {
    const frecuencia = new Map<string, number>();
    let maxFrecuencia = 0;
    let valorMasRepetido: any;

    arr.forEach((elem) => {
      let freq = (frecuencia.get(elem.category) || 0) + 1;
      frecuencia.set(elem.category, freq);
      if (freq > maxFrecuencia) {
        maxFrecuencia = freq;
        valorMasRepetido = elem;
      }
    });
    return [valorMasRepetido, maxFrecuencia];
  }

  toExpire7Days(fechas: any[]): number {
    const coincidencias: Date[] = [];
    const hoy = new Date();

    fechas.forEach((fecha) => {
      let date = new Date(fecha.expire);
      const diferencia = date.getTime() - hoy.getTime();
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      if (dias >= 0 && dias <= 7) {
        coincidencias.push(date);
      }
    });
    return coincidencias.length;
  }

  toExpireToday(fechas: any[]) {
    const hoy = new Date();
    const diaDeLaFecha = hoy.getDate();
    const mesDeLaFecha = hoy.getUTCMonth() + 1;
    const anioDeLaFecha = hoy.getFullYear();
    let cantidadDeCoincidencias = 0;

    fechas.forEach((fecha) => {
      let date = new Date(fecha.expire);
      if (
        diaDeLaFecha === date.getDate() + 1 &&
        mesDeLaFecha === date.getUTCMonth() &&
        anioDeLaFecha === date.getFullYear()
      ) {
        cantidadDeCoincidencias++;
      }
    });

    return cantidadDeCoincidencias;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
}
