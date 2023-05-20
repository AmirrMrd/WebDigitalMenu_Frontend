import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; Content-Disposition, `attachment; filename="${fileName}"' })
};


@Injectable({
  providedIn: 'root'
})


export class UploadFileService {

  // apiUrl : string = environment.baseUrl;
  baseUrl = 'https://localhost:44340/api/upload';
  
  constructor (private http : HttpClient) {  }


  
  // uploadLogo (file: File)  {
  //   console.log(file);
    
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data;' })
  //   };
    
  //   const formData = new FormData();
  //   formData.append('logo', file ,file.name)
  //     const url = `${this.baseUrl}/PostUserImage`;
  //     console.log(formData);
      
  //     return this.http.post(url, formData, httpOptions);    
  // }



  // downloadUrlFile (fileName : any) : Observable<any> {
  //   const url = `${this.baseUrl}/PostUserImage`;
  //   return this.http.get(url, fileName);
  // }
}











export class FileUploadModel{
  public  ufile :any;
  public  action :any;
}
