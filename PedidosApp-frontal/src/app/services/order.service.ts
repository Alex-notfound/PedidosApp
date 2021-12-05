import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/orders";

  public getOrders() {
    return this.http.get(this.url);
  }

}