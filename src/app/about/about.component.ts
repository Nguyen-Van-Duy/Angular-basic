import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  public age
  data: any

  constructor(private common: CommonService, private subject: ServerHttpService) {
    this.age = common.age
  }

  ngOnInit(): void {
    this.subject.getList().subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
  public tangTuoi() {
    this.common.age++
    this.age = this.common.age
  }

  handleClick() {
    alert("hi")
  }

}
