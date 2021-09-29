import { Component, OnInit } from '@angular/core';
import { ConsumerBusiness } from 'src/app/models/consumerBusiness';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { BusinessTypes } from '../../models/business-types'

@Component({
  selector: 'app-viewconsumerbusiness',
  templateUrl: './viewconsumerbusiness.component.html',
  styleUrls: ['./viewconsumerbusiness.component.css']
})
export class ViewconsumerbusinessComponent implements OnInit {

  consumerBusiness:ConsumerBusiness;
  consumerId:string;
  businessId:string;
  constructor(private consumerService:ConsumerService) {
    this.consumerBusiness={
      "consumerId": "",
      "consumerName": "",
      "email": "",
      "pan": "",
      "agentId": 0,
      "agentName": "",
      "businessId": "",
      "validityofConsumer": 0,
      "businessOverview": "",
      "businessType": "",
      "annualTurnOver": 0,
      "totalEmployees": 0,
      "capitalInvested": 0,
      "businessValue": 0
    }

    this.consumerId="";
    this.businessId="";

  }
  ngOnInit(): void {
  }

  viewConsumerBusiness(ConsumerId:string,BusinessId:string)
  {
    this.consumerService.viewConsumerBusiness(ConsumerId,BusinessId).subscribe(data=>{this.consumerBusiness=data;});
  }
}
