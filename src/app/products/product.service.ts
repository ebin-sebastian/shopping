import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  viewAllproduct(){
    const baseUrl='http://localhost:3000/products'
    return this.httpClient.get(baseUrl)
  }
}
