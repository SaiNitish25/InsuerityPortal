import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { PolicyService } from 'src/app/services/policy.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-issuepolicy',
  templateUrl: './issuepolicy.component.html',
  styleUrls: ['./issuepolicy.component.css']
})
export class IssuepolicyComponent implements OnInit {
  private readonly notifier: NotifierService
  constructor(private consumerService: ConsumerService,private policyService:PolicyService,private _router: Router, private businessService: BusinessService, notifierService: NotifierService) {
    this.notifier = notifierService
  }

  errorMessage = ""

  ShowCustomerToast = false
  CustomerToastText = ""
  ShowPropertyToast = false
  PropertyToastText = ""


  response: any ;


  cb: any = {
    "policyId":"",
    "consumerId": "",
    "businessId":"",
    "acceptanceStatus":"",
    "paymentDetails":"",
  }


  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  issuePolicy() {
    alert("hai")
    this.policyService.issuePolicy(this.cb)
//    this.policyService.issuePolicy(this.cb)
      .subscribe(
        res => {
          this.response = res
         if(this.response)
         {
           //alert("Consumer Business has been successfully created")
           swal.fire(
            'Awesome !',
            this.response,
            'success'
          )
           this._router.navigate([''])
         }
          console.log(this.response)
        },
        err => {
          alert(err.error.message)
          this.response = err
          alert(this.response.message)
          console.log(err)
        }
      )
  }



}







