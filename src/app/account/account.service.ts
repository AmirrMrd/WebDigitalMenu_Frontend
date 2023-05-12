import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn : boolean = false;
  constructor() { }

  public isAthenticated () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });
  }

  public login (user : string , password : string) {
    if (user === 'SEPIDZ' && password === '7990018720029848') {
      this.loggedIn = true;
      return this.loggedIn;
    }
    else {
      this.loggedIn = false;
      return this.loggedIn;
    }
  }
}
