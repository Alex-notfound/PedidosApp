import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemTypeService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/itemTypes";

  public getItemTypes() {
    return this.http.get(this.url);
  }

}