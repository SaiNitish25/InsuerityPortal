import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../constants/ApiRoutes';
import { ConsumerProperty } from '../models/consumerProperty';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private _http: HttpClient) { }

  CreateBusinessProperty(bp: any) { 
    var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.post(ApiRoutes.CreateBusinessProperty, bp,httpOptions);
  }

  viewConsumerProperty(ConsumerId :string,PropertyId:string ):Observable<ConsumerProperty>
  {
    var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.get<ConsumerProperty>(ApiRoutes.GetBusinessProperty+"/"+ConsumerId+"/"+PropertyId,httpOptions);
  }


  UpdateBusinessProperty(bp: any) {
    var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.put(ApiRoutes.UpdateBusinessProperty, bp,httpOptions);
  }

}
