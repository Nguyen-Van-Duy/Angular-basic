import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() author: any;
  @Output() handleToggle = new EventEmitter()

  constructor(private imageService: ServerHttpService) { }
  data = <any>[]

  ngOnInit(): void {
    console.log("author: ", this.author);
    this.imageService.getListImage().subscribe((res: any)=> {
      this.data = res.slice(0, 4)
      console.log(this.data);

    })
  }

  handleClick() {
    this.handleToggle.emit()
  }

}
