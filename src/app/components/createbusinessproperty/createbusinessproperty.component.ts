import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
@Component({
  selector: 'app-createbusinessproperty',
  templateUrl: './createbusinessproperty.component.html',
  styleUrls: ['./createbusinessproperty.component.css']
})
export class CreatebusinesspropertyComponent implements OnInit {
  private readonly notifier: NotifierService
  constructor(private consumerService: ConsumerService,private _router: Router, private businessService: BusinessService, notifierService: NotifierService) { 
    this.notifier = notifierService
  }

  errorMessage = ""

  ShowCustomerToast = false
  CustomerToastText = ""
  ShowPropertyToast = false
  PropertyToastText = ""


  response: any = {
    success: false,
    message: "",
    data: {
      id: 0
    }
  }

  
  cb: any = {
    "consumerName": "",
    "consumerId": "",
    "consumerEmail": "",
    "consumerPan": "",
    "agentId": 0,
    "agentName":"",
    "business": {
     // "businessName": "",
     "businessId":"",
     "validityOfConsumer":0,
     "businessOverview":"",
     "businessType":"",
     "annualTurnOver":0,
     "totalEmployees":0,
     "capitalInvested":0,
      // "businessType": 0,
      // "annualTurnOver": 0,
      // "capitalInvested": 0,
      // "businesIncorporation": "",
      // "totalEmployees": 0
    }
  }

  bp: any = {
    "consumerId": 0,
    "propertyId":"",
    "propertyType": 0,
    "buildingSqFt": 0,
    "buildingType":"",
    "storeys": 0,
    "propertyAge": 0,
   "costOfAsset": 0,
    "salvageValue": 0,
   
    "buildingSqft": 0,
   
    "buildingStoreys": 0,
    "buildingAge": 0,
    "costOfTheAsset": 0,
    "slavageValue": 0,
    "usefulLifeOfTheAsset": 0
  }

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  CreateBusiness() {
    
   // this.bp.property.buildingType=parseInt(this.bp.property.buildingType)
    
    alert(this.bp.buildingType);
    this.businessService.CreateBusinessProperty(this.bp)
    
      .subscribe(
        res => {
          
          this.response = res
         if(this.response)
         {
          // alert("Business Property has been successfully created")
          swal.fire(
            'Good job!',
            'Business Property has been successfully created',
            'success'
          )
           this._router.navigate([''])
         }
          console.log(this.response)
          // this.bp.businessId = this.response.data.id
          // this.businessService.CreateBusinessProperty(this.bp)
          //   .subscribe(
          //     res => {
          //       this.response = res
          //       //alert(this.response.message)
          //       window.location.reload()
          //     },
          //     err => {
          //       this.response = err
          //       alert(this.response.message)
          //       console.log(err)
          //     }
          //   )
        },
        err => {
          alert(this.bp.consumerId)
          alert(err.error.message)
          this.response = err
          alert(this.response.message)
          console.log(err)
        }
      )
  }


}



