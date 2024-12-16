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

  public getAllProducts(): Observable <IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseUrl);
  }
  public getAllCategories(): Observable <Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public getProductsWithSort(sort?: string): Observable <IProduct> {
    const params = sort ? `?sort=${sort}` : ""
    return this._httpClient.get<IProduct>(`${this.baseUrl}?${params}`);
  }

  public getProductsById(id: number): Observable <IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this.baseUrl}`, product)
  }

  public updateProduct (id:number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseUrl}/${id}`, product)
  }

  public deleteProduct (id:number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`)
  }

}
