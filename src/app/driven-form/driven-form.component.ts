import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {

  public name = null
  public password = null
  public ages = [12,13,14,15,17]
  public selectedAge = ''

  constructor(private httpRequest: ServerHttpService) { }

  ngOnInit(): void {

  }

  postData() {
    console.log("post data1")
    this.httpRequest.postList().subscribe(res => console.log(res))
  }

  deleteData() {
    console.log("delete data")
    this.httpRequest.deleteList().subscribe(res => console.log(res))
  }

  public onSubmit(formValue: NgForm) {
    // console.log(this.name, this.password, this.selectedAge)
    console.log(formValue.value)
  }

  public HandleSelectedAge(event: any) {
    console.log(this.selectedAge, event.target.value)
    this.selectedAge = event.target.value
  }



}
