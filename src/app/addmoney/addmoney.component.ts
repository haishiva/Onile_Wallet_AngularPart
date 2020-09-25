import { Component, OnInit } from '@angular/core';
import { WalletAccount, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {

  output: any;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(walletAccount:WalletAccount):any{
    console.log();
    this.myservice.addMoney(walletAccount).subscribe( data => 
    this.output=data);
  }
}
