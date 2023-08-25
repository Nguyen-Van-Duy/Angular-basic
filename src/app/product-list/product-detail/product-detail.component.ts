import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() listProduct: any;
  @Output() deleteProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.listProduct)
  }

  handleDeleteProduct(e: any) {
    this.deleteProduct.emit(e.id)

  }

}
