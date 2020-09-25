import { Component, OnInit } from '@angular/core';
import { MyserviceService, WalletUser } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
  }
message: String;
onSubmit(user: WalletUser)
{
  console.log(user);

   this.myservice.addUser(user).subscribe(data => {
    this.message=data});
}

}
