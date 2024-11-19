import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product, productList } from '../products/product.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit{

  producto?: Product;
  productList: Product[] = productList;
  loading: boolean= true;
  
  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
   setTimeout(()=>{
    this._route.params.subscribe(params=>{
      // this.producto = params['productsId'];
      this.producto = this.productList.find(producto=> producto.id == params['productsId']);
      this.loading = false;
    });
   },1500)
  }
}
