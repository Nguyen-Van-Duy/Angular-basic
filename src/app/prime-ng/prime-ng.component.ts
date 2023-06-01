import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.scss']
})
export class PrimeNGComponent implements OnInit {

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];

  isTabActive = true

  toggle = () => {
    this.isTabActive = !this.isTabActive
    console.log("2222222222222");

  }

  constructor() {
   }

  ngOnInit(): void {

  }

  // afterSignUp(googleUser: any) {
  //   this.guser = googleUser
  // }

}
