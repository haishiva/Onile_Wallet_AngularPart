import { Component, OnInit } from '@angular/core';
import { MyserviceService, WalletUser } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  walletUser: WalletUser;
  output: String;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(user):any{
    console.log();
     this.myservice.userLogin(user.userId,user.password).subscribe(response => 
      this.hello(response));
  }
  hello(response)
  {
    this.walletUser=response;
    if (this.walletUser==null) {
      this.output="UserId and Password are Incorrect"
    } else {
      this.output="Logged in Succesfully";
      if (this.walletUser.walletAccount==null) {
        this.myservice.user(this.walletUser);
        this.router.navigate(['/createaccount']);
      } else {
      this.myservice.isLoggedIn=true;
      this.myservice.user(this.walletUser);
      this.myservice.account(this.walletUser.walletAccount);
      this.router.navigate(['/mainpage']);
      }
    }
  }

}
