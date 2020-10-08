import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  // tslint:disable-next-line: typedef
  clickProduct(id: number) {
    console.log('Producto: ' + id);
  }
}