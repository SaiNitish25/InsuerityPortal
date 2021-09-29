import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { PolicyService } from 'src/app/services/policy.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {
  private readonly notifier: NotifierService
  constructor(private consumerService: ConsumerService,private policyService:PolicyService,private _router: Router, private businessService: BusinessService, notifierService: NotifierService) {
    this.notifier = notifierService
  }
  errorMessage = ""
  ShowCustomerToast = false
  CustomerToastText = ""
  ShowPropertyToast = false
  PropertyToastText = ""
  response: any;
  cb: any = {
    "acceptedQuotes":"",
    "consumerId": "",
    "propertyId":"",
    "businessId":"",

  }
  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  CreatePolicy() {
    this.policyService.createPolicy(this.cb)
      .subscribe(
        res => {
          this.response = res;
         if(this.response)
          {
           swal.fire(
            'Good job!',
            this.response)
          this._router.navigate([''])
         }
          console.log(this.response.statuscode)
        },
        err => {
          //alert(err.error.message)
          this.response = err
          //alert(this.response.message)
          console.log(err)
        }
      )
  }


}


