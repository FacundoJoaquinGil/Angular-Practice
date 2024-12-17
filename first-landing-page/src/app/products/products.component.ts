import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  productList: any[] = [];

  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this._ApiService.getAllProducts().subscribe((data: IProduct[]) => {
      console.log(data)
      this.productList = data;
    });
  
  }
}

