import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://fakestoreapi.com/products";

  constructor(private _httpClient: HttpClient) { 
    
   }

  public getProducts(): Observable <IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseUrl);
  }
  public getCategory(): Observable <Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public getProductsWithSort(sort?: string): Observable <IProduct> {
    const params = sort ? `?sort=${sort}` : ""
    return this._httpClient.get<IProduct>(`${this.baseUrl}?${params}`);
  }

  public getProductsById(id: number): Observable <IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

}
