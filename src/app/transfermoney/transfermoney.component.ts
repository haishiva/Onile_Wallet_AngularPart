import { Component, OnInit } from '@angular/core';
import { MyserviceService, WalletUser } from '../myservice.service';

@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})
export class TransfermoneyComponent implements OnInit {
  user: WalletUser;
  output: string;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.user=this.myservice.userMethod();
  }
  onSubmit(obj):any{
    if(obj.receiveraccountId==obj.accountId||obj.amount<=0)
    {
      this.output="Invalid Transaction";
    }
    else{
        
      console.log();
      this.myservice.transferAmount(this.user.userId,obj).subscribe( data => 
      this.output=data);
    }
    }

}
