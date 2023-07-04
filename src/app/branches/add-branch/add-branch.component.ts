import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder, AbstractControl } from '@angular/forms';
import { branch } from 'src/app/models/branchModel';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})

export class AddBranchComponent implements OnInit {

  addBranchForm :  FormGroup = new FormGroup({
    branchId : new FormControl(),
    branchName: new FormControl(''),
    branchDescription: new FormControl(''),
    branchPort: new FormControl(''),
    branchIpAddress: new FormControl(''),
    branchLogoUrl: new FormControl(''),
    branchIsActive : new FormControl(true),
  });

  public submitted = false;


  constructor (private branchSer : BranchService , private formBuilder : FormBuilder) {}
  
  ngOnInit(): void {
    this.addBranchForm = this.formBuilder.group({
      branchId: ['', Validators.required],
      branchName: ['',[Validators.required , Validators.minLength(3)]],
      branchDescription: ['' , Validators.required],
      branchPort: [ null , Validators.required],
      branchIpAddress: [ null ,[Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?(\.|$)){4}')
    ]],
      branchIsActive: [false , Validators.requiredTrue],
      ImageBase64: [null, Validators.required]
    });
  }

  branchUrlbase64 = '';
  public obj: any = {};
  ImgUrl : string = '';
  OriginUrl : string = location.origin;


  

  // getUrl(event : any) {
  //   const file : File = event.target.files[0];
  //   this.ImgUrl = this.OriginUrl + '/assets/background/' + file.name;
  // }

  get f(): { [key: string]: AbstractControl } {
    return this.addBranchForm.controls;
  }

  public upload (input : any ) {

    if ( input.files && input.files[0] ) 
    {
       var reader = new FileReader();
       reader.onload = (e: any) => {
         // console.log('Got here: ', e.target.result);
         this.obj.photoUrl = e.target.result;
         this.ImgUrl = this.obj.photoUrl
       }
       reader.readAsDataURL(input.files[0]);
    }
}

  submitBranch(): void {
    if (this.addBranchForm.invalid) {
      this.submitted = true;
      return console.error("فرم به درستی پر نشده است");
    }
    else {
      const newBranch : branch = this.addBranchForm.value;
      newBranch.ImageBase64 = this.obj.photoUrl;
      this.branchSer.createBranch(newBranch).subscribe((data) => {
      console.log(data);
      this.addBranchForm.reset();
      });

      this.addBranchForm.reset();
      this.ImgUrl = '';
    }
  }

  // public submitBranch(data : FormGroup) {
  //     const newBranch : branch = {
  //       BranchId : data.controls['branchId'].value,
  //       BranchName : data.controls['branchName'].value,
  //       BranchDescription : data.controls['branchDescription'].value,
  //       BranchPortNumber : data.controls['branchPort'].value,
  //       BranchIpAddress : data.controls['branchIpAddress'].value,
  //       BranchIsActive : data.controls['branchIsActive'].value,
  //       ImageBase64 : this.obj.photoUrl
  //     }



}


