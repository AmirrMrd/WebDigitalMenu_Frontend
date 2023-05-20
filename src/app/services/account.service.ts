import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn : boolean = false;
  constructor( private router : Router) { }

  public isAthenticated () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });
  }

  public login (user : string , password : string) {
    if (user === 'S' && password === '123') {
      this.loggedIn = true;
      this.router.navigate(['add-branch']);
      return this.loggedIn;
    }
    else {
      this.loggedIn = false;
      return this.loggedIn;
    }
  }
}
