import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { ConsumerService } from 'src/app/services/consumer.service';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-show-quotes',
  templateUrl: './show-quotes.component.html',
  styleUrls: ['./show-quotes.component.css']
})
export class ShowQuotesComponent implements OnInit {

  constructor(private quotesService: QuotesService, private consumerService: ConsumerService) { }

  requestSent = false
  errorMessage = ""
  id = 0
  pid=0

  quotes: Quote[] = []

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  onSubmit() {
    this.consumerService.viewConsumerBusiness("C01","B01")
      .subscribe(
        res => {
          if(res == null) {
            this.errorMessage = "Consumer Not Found. Invalid Id!"
          }
          else {
            this.quotesService.GetQuotes(this.id)
              .subscribe(
                res => {
                  this.quotes = res
                  // console.log(this.quotes)
                  if (this.quotes.length == 0) {
                    alert("No Quotes Available")
                  }
                  else {
                    this.requestSent = true
                  }
                },
                err => {
                  console.log(err)
                  alert("Some Network Error Occured");
                }
              )
          }
        }
      )

  }
}
