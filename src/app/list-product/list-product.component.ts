import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() author: any;
  @Output() handleToggle = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log("author: ", this.author);
  }

  handleClick() {
    this.handleToggle.emit()
  }

}
