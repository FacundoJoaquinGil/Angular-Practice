import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  
  product?: IProduct;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
      this._apiService.getProductsById(Number(params['productsId'])).subscribe({
      next: (data: IProduct) =>{
        this.product = data 
        this.loading = false;
      },
      error: (error: any) => {
        console.log(error);
        this.loading = false;
      }
    })
    }
    })
    }
  }

