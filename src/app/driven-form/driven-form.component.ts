import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.name, this.password, this.selectedAge)
  }

  public HandleSelectedAge(event: any) {
    // console.log(this.selectedAge, event.target.value)
    this.selectedAge = event.target.value
  }

}
