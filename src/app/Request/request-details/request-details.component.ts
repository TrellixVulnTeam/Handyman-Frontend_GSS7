import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { RequestsService } from 'src/app/services/RequestS.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
requests;
  constructor(private requestService : RequestService, private requestsservice : RequestsService ) { }

  ngOnInit(): void {
   // this.getRequestById(1)
  }
  // GetRequest() {
  //   this.requestsservice.getRequestById(1).subscribe(
  //     res => {
  //       this.requests = res;
  //     },
  //     err => {}
  //   );
  // }

}