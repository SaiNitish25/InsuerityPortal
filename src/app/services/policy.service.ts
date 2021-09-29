import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApiRoutes } from '../constants/ApiRoutes';
import { ConsumerPolicy } from '../models/consumerPolicy';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private _http: HttpClient) { }

  createPolicy(cp: any)
  { var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8',Authorization:`${token}`}),responseType: 'text' as 'text'};
    return this._http.post(ApiRoutes.CreatePolicy,cp, httpOptions);
  }

  issuePolicy(ip:any)
  { var token='Bearer ' + localStorage.getItem('Authorization')
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8',Authorization:`${token}`}),responseType: 'text' as 'text'};
    return this._http.post(ApiRoutes.IssuePolicy,ip,httpOptions);
  }

  viewPolicy(ConsumerId :string,PolicyId:string ):Observable<ConsumerPolicy>
  {
    var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.get<ConsumerPolicy>(ApiRoutes.GetPolicy+"/" +ConsumerId+"/"+PolicyId,httpOptions);
  }

  getQuotes(pValue:string,bValue:string,pType:string)
  {
    return this._http.get(ApiRoutes.GetQuotes+'/'+pValue+'/'+bValue+'/'+pType)
  }
}
