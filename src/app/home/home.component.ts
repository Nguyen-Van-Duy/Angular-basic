import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { MatDialog } from '@angular/material/dialog';
import { InAppFormComponent } from '../in-app-form/in-app-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "Duy"
  public age
  public array



   constructor(private common: CommonService, private serverService: ServerHttpService, private dialog: MatDialog){
    this.age = common.age
    this.array = serverService.array2
  }

  ngOnInit(): void {
    this.serverService.getListAddress().subscribe(res=>{
      console.log(res)
    })
  }

  showModal() {
    let dialogEditRef = this.dialog.open(InAppFormComponent, {
      disableClose: false,
      autoFocus: true,
      width: "800px",
      minWidth: "800px",
      data: {},
    });

    dialogEditRef
      .afterClosed()
      .subscribe((result: any) => {
        if (result && result.updated) {
          console.log(result);
        }
      });
    // console.log(this.serverService.array2)
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
