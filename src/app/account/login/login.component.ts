import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });



  onSubmit (data : any) {
    console.log('loginOk' , data);
    
  }
}
