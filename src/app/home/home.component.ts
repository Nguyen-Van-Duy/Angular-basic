import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "Duy"
  public age
  public array



   constructor(private common: CommonService, private serverService: ServerHttpService){
    this.age = common.age
    this.array = serverService.array2
  }

  ngOnInit(): void {
    this.serverService.getList().subscribe(res=>{
      console.log(res)
    })
    console.log(this.serverService.array2)
  }

  public tangTuoi() {
    this.common.age++
    this.age = this.common.age
    if(this.age === 20) {
      this.name = "ahhhhhh"
      this.array.push(this.age)
    }
  }

}
