import { Component } from '@angular/core';
import { loginRequest } from '../models/login-request.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model:loginRequest;
  constructor( private loginService:LoginService){
    this.model={
      email:'',
      password:''
    }
  }

  onFormSubmit(){
    this.loginService.login(this.model)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }
}
