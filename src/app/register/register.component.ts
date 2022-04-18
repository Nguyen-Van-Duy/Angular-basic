import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  errorMessage: any
  number = 0

  constructor(private form: FormBuilder) {
    let as: any
    if(this.number === 0) {
      console.log("22222222222")
      as = setInterval(() => {
        this.number++
        if(this.number === 5) {
          clearInterval(as)
        }
      }, 1000)
    }
  }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
        ])
      ],
      password: "",
      fullName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[0-9]+$')
        ])
      ],
      yearOfBirth: Number,
      citizenIdentification: "123456789",
      gender: 1,
      province: 1,
      provinceName: "",
      district: 8,
      ward: 316,
      specificAddress: "",
      phone: "",
    })

  }
  get formName() {
    // console.log(this.registerForm.controls)
    return this.registerForm.controls
  }



  onSubmit() {
    console.log(this.registerForm)
    if(!this.registerForm.invalid) {
      alert("thanh công!")
    } else {
      this.formName.fullName.touched = true
      alert("thất bại!")
    }
  }
}
