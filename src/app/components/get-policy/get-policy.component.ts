import { Component, OnInit } from '@angular/core';
import { ConsumerPolicy } from 'src/app/models/consumerPolicy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-get-policy',
  templateUrl: './get-policy.component.html',
  styleUrls: ['./get-policy.component.css']
})
export class GetPolicyComponent implements OnInit {

  consumerPolicy:ConsumerPolicy;
  consumerId:string;
  policyId:string;
  constructor(private policyService:PolicyService) {
    this.consumerPolicy ={
      "consumerId": "",
      "businessId": "",
      "policyId": "",
      "acceptedQuotes": "",
      "policyStatus": "",
      "paymentDetails": "",
      "acceptanceStatus": "",
      "effectiveDate": ""
    }
    this.consumerId="";
    this.policyId="";
   }

  ngOnInit(): void {
  }

  viewPolicy(ConsumerId:string,PolicyId:string)
  {
    
    this.policyService.viewPolicy(ConsumerId,PolicyId).subscribe(data=>{this.consumerPolicy=data;});
  }
}
