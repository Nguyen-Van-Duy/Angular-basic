import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { MatDialog } from '@angular/material/dialog';
import { InAppFormComponent } from '../in-app-form/in-app-form.component';
import { FormEventComponent } from './form-event/form-event.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, debounce, debounceTime, delay, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  search = new FormControl("");
  formFilter!: FormGroup;
  filter$!: BehaviorSubject<FormGroup>;

  constructor(private common: CommonService, private serverService: ServerHttpService, private dialog: MatDialog, private fb: FormBuilder){
    this.formFilter = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.filter$ = new BehaviorSubject(this.formFilter.value);
    this.filter$.pipe(
      // startWith(this.formFilter.value),
      debounceTime(500),
      map(res => {
      console.log("this.filter$: ", res);
    }))
    .subscribe(res => {
      // console.log("result: ", res);
    })

    // this.serverService.getListAddress().subscribe(res=>{
    //   console.log(res)
    // })

    this.search.valueChanges.pipe(
      distinctUntilChanged(),
      map(value => console.log("value: ", value))
    )
    .subscribe(res => {
      console.log("res: ", this.formFilter.value);

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
  handleChange($event: any) {
    console.log($event);
    this.filter$.next(this.formFilter.value)

  }

}
