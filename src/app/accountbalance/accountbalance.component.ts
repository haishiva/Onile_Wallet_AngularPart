import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrls: ['./accountbalance.component.css']
})
export class AccountbalanceComponent implements OnInit {

  output: number;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(accountId):any{
    console.log();
    this.myservice.viewBalance(accountId.accountId).subscribe( data => 
    this.output=data);
  }
}
