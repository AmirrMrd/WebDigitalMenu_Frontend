import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    mobile : new FormControl('')
  });

  onSubmit(data : any) {
    console.log('registerOk' , data);
  }
}
