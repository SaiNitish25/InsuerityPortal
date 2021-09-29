import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
@Component({
  selector: 'app-updatebusinessproperty',
  templateUrl: './updatebusinessproperty.component.html',
  styleUrls: ['./updatebusinessproperty.component.css']
})
export class UpdatebusinesspropertyComponent implements OnInit {
  propertyId:string;
  consumerId:string;
  private readonly notifier: NotifierService
  constructor(private consumerService: ConsumerService,private _router: Router, private businessService: BusinessService, notifierService: NotifierService) {
    this.notifier = notifierService;
    this.consumerId="";
    this.propertyId="";
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

  businessess =  [
    {
      value: 0, text: "SoleProprietorship"
    },
    {
      value: 1, text: "Partnership"
    },
    {
      value: 2, text: "LimitedPartnership"
    },
    {
      value: 3, text: "LimitedLiabilityCompany"
    },
    {
      value: 4, text: "Corporation"
    },
    {
      value: 5, text: "NonProfit"
    },
    {
      value: 6, text: "Cooperative"
    }
  ]

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
    //"salvageValue": 0,
    "usefulLifeOfTheAsset": 0
  }

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  UpdateBusiness() {
    alert(this.bp.buildingAge)
    //this.cb.business.businessType = parseInt( this.cb.business.businessType)
    //alert(this.cb.business.businessType)
    //this.bp.property.buildingType=parseInt( this.bp.property.buildingType)

    this.businessService.UpdateBusinessProperty(this.bp)
      .subscribe(
        res => {
          alert(this.bp.buildingAge)
          this.response = res
         if(this.response)
         {
          // alert("Business Property has been successfully updated")
          swal.fire(
            'Good job!',
            'Business Property has been successfully updated',
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
  viewConsumerProperty(ConsumerId:string,PropertyId:string)
  {
    this.businessService.viewConsumerProperty(ConsumerId,PropertyId).subscribe(data=>{this.bp=data;});
    console.log(this.bp);
  }





}





