import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export class ServerSearchRequest {
  page?: number;
  size?: number;
  status?: string;
  system?: string[];
  value?: string;
  grantTime?: string;
}

@Component({
  selector: 'app-in-app-form',
  templateUrl: './in-app-form.component.html',
  styleUrls: ['./in-app-form.component.scss']
})
export class InAppFormComponent implements OnInit {

  currentDate:string = '';
  serverSearchRequest: ServerSearchRequest = {};

  inAppForm = this.fb.group({
    name: [null],
    message: [null],
    blackList: [null],
    condition: [null],
    page: [null],
    expiry: 'Expiry_2',
    dateStart: [null],
    dateEnd: [null],
    max_impressions: 0,
    min_impressions: 0,
    impressions_time: 'ngay',
    delay: 0,
    frequencyCapping: false,
    priority: [null],
    device: [null],
    deviceOS: [null],
    versionOS: [null],
    versionApp: [null],
  })

  listMessage = [
    { value: 'message_1', label: 'In-app message gửi tập mass 1' },
    { value: 'message_2', label: 'In-app message gửi tập mass 2' },
    { value: 'message_3', label: 'In-app message gửi tập mass 3' },
    { value: 'message_4', label: 'In-app message gửi tập mass 4' },
    { value: 'message_5', label: 'In-app message gửi tập mass 5' },
    { value: 'message_6', label: 'In-app message gửi tập mass 6' },
    { value: 'message_7', label: 'In-app message gửi tập mass 7' },
  ];

  listBlackList = [
    { value: 'Blacklist_1', label: 'Blacklist Mở app là có quà 1' },
    { value: 'Blacklist_2', label: 'Blacklist Mở app là có quà 2' },
    { value: 'Blacklist_3', label: 'Blacklist Mở app là có quà 3' },
    { value: 'Blacklist_4', label: 'Blacklist Mở app là có quà 4' },
    { value: 'Blacklist_5', label: 'Blacklist Mở app là có quà 5' },
    { value: 'Blacklist_6', label: 'Blacklist Mở app là có quà 6' },
    { value: 'Blacklist_7', label: 'Blacklist Mở app là có quà 7' },
  ];

  listCondition = [
    { value: 'condition_1', label: 'Điều kiện theo Segment' },
    { value: 'condition_2', label: 'Điều kiện theo thuộc tính' },
    { value: 'condition_3', label: 'Điều kiện theo hành vi' },
  ]

  listExpiry = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listDevice = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listPriority = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listDeviceOS = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listVersionOS = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listVersionApp = [
    { value: 'Expiry_1', label: 'Không giới hạn' },
    { value: 'Expiry_2', label: 'Expiry tĩnh' },
    { value: 'Expiry_3', label: 'Expiry động' },
  ]

  listTime = [
    { value: 'phut', label: 'Phút' },
    { value: 'gio', label: 'Giờ' },
    { value: 'ngay', label: 'Ngày' },
    { value: 'thang', label: 'Tháng' },
    { value: 'nam', label: 'Năm' },
  ];

  listPage = [
    {
      'id': '1',
      'index': 2,
      'isActive': true,
      'picture': 'http://placehold.it/32x32',
      'name': 'Karyn Wright',
      'gender': 'All',
    },
    {
      'id': '2',
      'index': 2,
      'isActive': true,
      'picture': 'http://placehold.it/32x32',
      'name': 'Duy',
      'gender': 'All',
    },
  //   {
  //     'id': '5a15b13c2340978ec3d2c0ea',
  //     'index': 3,
  //     'isActive': false,
  //     'picture': 'http://placehold.it/32x32',
  //     'name': 'Rochelle Estes',
  //     'disabled': true,
  //     'gender': 'female',
  // },
  ]



  constructor(private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<InAppFormComponent>) {
    this.serverSearchRequest.page = 0;
    this.serverSearchRequest.grantTime = "";
    this.serverSearchRequest.size = 10;
    this.serverSearchRequest.status = "";
    this.serverSearchRequest.system = [];
    this.serverSearchRequest.value = "";
    // this.dialogRef.disableClose = true;
   }

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    console.log("serverSearchRequest: ", this.serverSearchRequest);

    this.inAppForm.controls['deviceOS'].disable();
    this.inAppForm.controls['versionOS'].disable();
    this.inAppForm.controls['versionApp'].disable();
  }

  changeDateStart = (e:any) => {
    // const dateStart = new Date(e.target.value).getTime()
    // this.currentDate = new Date().toISOString().slice(0, 10);
    this.currentDate = e.target.value;
    this.inAppForm.patchValue({dateEnd: ''})
  }

  changeDevice = (e: any) => {
    console.log(e);
    this.inAppForm.controls['deviceOS'].enable();
  }

  changeDeviceOS = (e: any) => {
    console.log(e);
    this.inAppForm.controls['versionOS'].enable();
  }

  changeVersionOS = (e: any) => {
    console.log(e);
    this.inAppForm.controls['versionApp'].enable();
  }

  onSubmit = () => {
    console.log(this.inAppForm.value);
  }
}
