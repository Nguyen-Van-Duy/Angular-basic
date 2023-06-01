import { Component } from '@angular/core';
import { ServerHttpService } from './Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'First-App';



  date7:any

  minDate:any

  maxDate:any

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setMonth(-1);
    // this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(7);
    // this.maxDate.setFullYear(nextYear);
  }

}


// https://dbkhaibaoyte.herokuapp.com/
