import { MatPaginator } from '@angular/material/paginator';
import { OrderService } from './../services/order.service';
import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../model/Order';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {

  orders: Order[] = [];
  dataSource = new MatTableDataSource<Order>(this.orders);

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['reference', 'orderDate', 'deliveryDate', 'price', 'urgent'];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders()
    this.dataSource.paginator = this.paginator;
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource<Order>(response as Order[]);
        this.dataSource.paginator = this.paginator;
      });
    console.log(this.dataSource);
  }

}
