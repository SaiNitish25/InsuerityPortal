import { Component, OnInit } from '@angular/core';
import { ConsumerProperty } from 'src/app/models/consumerProperty';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { BusinessTypes } from '../../models/business-types'

@Component({
  selector: 'app-viewcomsumerproperty',
  templateUrl: './viewcomsumerproperty.component.html',
  styleUrls: ['./viewcomsumerproperty.component.css']
})
export class ViewcomsumerpropertyComponent implements OnInit {

  consumerId:string;
  propertyId:string;
  consumerProperty:ConsumerProperty;
  constructor(private businessService:BusinessService) {
    this.consumerProperty={
      "consumerId": "",
      "propertyId": "",
      "buildingSqft": 0,
      "buildingType": "",
      "buildingStoreys": 0,
      "buildingAge": 0,
      "costOfTheAsset": 0,
      "salvageValue": 0,
      "usefulLifeOfTheAsset": 0,
      "propertyValue": 0
    }
      this.consumerId="";
      this.propertyId="";
  }

  ngOnInit(): void {
  }

  viewConsumerProperty(ConsumerId:string,PropertyId:string)
  {
    this.businessService.viewConsumerProperty(ConsumerId,PropertyId).subscribe(data=>{this.consumerProperty=data;});
  }


}



