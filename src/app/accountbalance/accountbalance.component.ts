import { Component, OnInit } from '@angular/core';
import { MyserviceService, WalletUser } from '../myservice.service';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrls: ['./accountbalance.component.css']
})
export class AccountbalanceComponent implements OnInit {
 user: WalletUser;
  output: number=null;
  message: string;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.user=this.myservice.userMethod();
  }
  onSubmit(accountId):any{
    console.log();
    this.myservice.viewBalance(accountId.accountId,this.user.userId).subscribe( data => 
    this.output=data);
    if(this.output==null)
    {
      this.message="Invalid AccountId";
    }
  }
}
