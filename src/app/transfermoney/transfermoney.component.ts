import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})
export class TransfermoneyComponent implements OnInit {

  output: string;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(obj):any{
    console.log();
    this.myservice.transferAmount(obj).subscribe( data => 
    this.output=data);
  }

}
