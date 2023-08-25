import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "https://jsonplaceholder.typicode.com/photos"

  constructor(private http: HttpClient) { }

  getListProduct():Observable<any> {
    return this.http.get<any>(this.url)
  }

  getDetailProduct():Observable<any> {
    return this.http.get<any>(this.url)
  }
}
