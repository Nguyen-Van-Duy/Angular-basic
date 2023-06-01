import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
export class ServerHttpService {
  array2 = [2,3,4,5,65,6,7]
  // url = 'https://dbkhaibaoyte.herokuapp.com/user'
  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getList():Observable<any> {
    return this.http.get<any>(this.url)
  }

  deleteList():Observable<any> {
    return this.http.delete<any>(this.url + '/8')
  }

  postList(): Observable<any> {
    console.log("post data")
    return this.http.post<any>(this.url, {
      email: "duy123@rikkei.com",
      password: "12345678",
      fullName: "Duy",
      yearOfBirth: 1999,
      citizenIdentification: "123456789",
      gender: 1,
      province: 1,
      provinceName: "Thành phố Hà Nội",
      district: 8,
      ward: 316,
      specificAddress: "Số 80 Kim Giang",
      phone: "0349170065",
      createdDate: "15/4/2022",
    })
  }
}


