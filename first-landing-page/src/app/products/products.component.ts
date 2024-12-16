import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  productList: IProduct[];

  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this._ApiService.getAllCategories().subscribe(
      console.log(data)
      (data: IProduct[]) => (this.productList = data)
    );
  }
}

