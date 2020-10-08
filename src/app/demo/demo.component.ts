import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };

  title = 'platzi-store';

  items = ['diego', 'carlos', 'juan'];

  power = 10;

  
  // tslint:disable-next-line: typedef
  addItem(){
    this.items.push('nuevo item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
