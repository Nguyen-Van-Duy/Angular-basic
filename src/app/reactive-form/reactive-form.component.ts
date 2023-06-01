import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  name="duy123@"

  profileForm = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
  });
  constructor(private Router: Router) { }

  ngOnChanges(): void {
    console.log("onChange")
  }

  ngOnInit(): void {
    console.log("onInit")
  }

  onSubmit() {
    console.log(this.profileForm.controls['name'].value)
    this.Router.navigateByUrl('/')
  }

  handleClick() {
    console.log("profileForm:", this.profileForm);

  }

}
