import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  name="duy123@"
  profileForm = this.fb.group({
    name: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])
    ],
    age: '',
    radio: '',
    rememberMe: true
  })

  // profileForm = new FormGroup({
  //   name: new FormControl(null),
  //   age: new FormControl(null),
  // });


  constructor(private Router: Router, private fb: FormBuilder) { }

  ngOnChanges(): void {
    console.log("onChange")
  }

  ngOnInit(): void {
    this.profileForm.controls['age'].setValue('10')
    // this.profileForm.patchValue({name: 'duy'})
    console.log("onInit")
  }

  onSubmit() {
    console.log(this.profileForm.value)
    console.log(this.profileForm)
    // this.Router.navigateByUrl('/')
  }

  handleClick() {
    console.log("profileForm:", this.profileForm);

  }

}
