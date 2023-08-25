import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listProduct = <any>[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(res=>{
      console.log(res)
      this.listProduct = res.filter((item: any, i: number)=>i<20)
    })
  }

  deleteProduct(e: any) {
    this.listProduct = this.listProduct.filter((item: any)=>item.id!==e)
    console.log("hehe: ", this.listProduct);
  }

}
