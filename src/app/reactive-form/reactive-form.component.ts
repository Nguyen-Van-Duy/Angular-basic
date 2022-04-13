import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public profileForm = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
  });
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.profileForm.controls['name'].value)
  }

}
