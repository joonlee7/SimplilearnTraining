import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "./model.product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  loadProductDetails(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }
}
