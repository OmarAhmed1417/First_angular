import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='https://jsonplaceholder.org/posts';
  constructor (private http:HttpClient){};
  getDta(){
    return['data1','data2','data3']
  }

  getpost=():Observable<any>=>{
    return this.http.get(this.url);
  }

}
