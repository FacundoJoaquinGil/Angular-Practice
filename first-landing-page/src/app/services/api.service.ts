import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://fakestoreapi.com/products";

  constructor(private _httpClient: HttpClient) { 
    
   }

  public getProducts(): Observable <IProduct> {
    return this._httpClient.get<IProduct>(this.baseUrl);
  }

}
