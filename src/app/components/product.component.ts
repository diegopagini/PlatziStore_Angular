import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor');
  }

  // tslint:disable-next-line: typedef
  ngOnChange(changes: SimpleChanges) {
    console.log('ngOnchanges');
    console.log(changes);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    console.log('ngOnInit');
  }

  // ngDoChech() {
  //   console.log('ngDoChech');
  // }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  // tslint:disable-next-line: typedef
  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit('this.product.id');
  }
}