import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../constants/ApiRoutes'
import { ConsumerBusiness } from '../models/consumerBusiness';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})

export class ConsumerService {

  constructor(private _http: HttpClient,private auth:AuthService) { }
  /*
   var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+t)
    });

        const httpOptions = {
          headers: headers_object
        };


   this.http.post(
                  'http://localhost:8000/api/role/Post', {limit:10}, httpOptions
                 ).subscribe(resp => {
                  this.roles = console.log(resp)
                  }
                );
  */

  CreateCustomer(cb: any):Observable<any> {

    
    var token='Bearer ' + localStorage.getItem('Authorization')
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:token
      })
    }

        return this._http.post(ApiRoutes.CreateCustomerBusiness,cb,httpOptions)
           
       
  }

  viewConsumerBusiness(ConsumerId :string,BusinessId:string ):Observable<ConsumerBusiness>
  {
    /*const headers = new HttpHeaders();
    let tokenParse = localStorage.getItem("Authorization") 
    headers.append('Authorization', `Bearer ${tokenParse}`);
    alert(JSON.stringify(headers))
    alert(headers)
    */
   var token='Bearer ' + localStorage.getItem('Authorization')
   //alert(token)
   /*var token1={'Accept':'application/json',
   'Content-Type': 'application/json',
   'Authorization': token}
   alert("Hello "+token1.Authorization);
    var reqHeader = new HttpHeaders({ 
      'Accept':'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
   });
   //alert(token)
   alert(JSON.stringify(reqHeader));
     alert( localStorage.getItem('Authorization'))*/
     
    //ApiRoutes.GetCustomerBusiness+"/"+ConsumerId+"/"+BusinessId
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.get<ConsumerBusiness>(ApiRoutes.GetCustomerBusiness+"/"+ConsumerId+"/"+BusinessId,httpOptions)
    
  }

  UpdateConsumerBusiness(consumerBusiness: any) {
    var token='Bearer ' + localStorage.getItem('Authorization')
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`${token}`
      })
    }
    return this._http.put(ApiRoutes.UpdateCustomerBusiness, consumerBusiness,httpOptions)
  }
}

