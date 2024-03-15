import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { MatDialog } from '@angular/material/dialog';
import { InAppFormComponent } from '../in-app-form/in-app-form.component';
import { FormEventComponent } from './form-event/form-event.component';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private common: CommonService, private serverService: ServerHttpService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.serverService.getListAddress().subscribe(res=>{
      console.log(res)
    })
  }

  showModal() {
    let dialogEditRef = this.dialog.open(FormEventComponent, {
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
  }

}
