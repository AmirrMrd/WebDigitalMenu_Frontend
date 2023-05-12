import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { branch } from 'src/app/models/branchModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})


export class BranchService {
  baseUrl = 'https://localhost:44340/api/branch';
  
  constructor(private http : HttpClient) { }



  public getAllBranch () : Observable<any> {
    const url = `${this.baseUrl}/getallbranches`;
    return this.http.get(url,httpOptions);
  }
}
