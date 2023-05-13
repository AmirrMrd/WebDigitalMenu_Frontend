import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { branch } from 'src/app/models/branchModel';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent {

  constructor (private branchSer : BranchService) {}
  ImgUrl : string = '';
  OriginUrl : string = location.origin;
  addBranchForm = new FormGroup({
    branchId : new FormControl(0),
    branchName: new FormControl(''),
    branchDescription: new FormControl(''),
    branchPort: new FormControl(''),
    branchIpAddress: new FormControl(''),
    branchLogoUrl: new FormControl(''),
    branchIsActive : new FormControl('')
  });

  getUrl(event : any) {
    const file : File = event.target.files[0];
    this.ImgUrl = this.OriginUrl + '/assets/background/' + file.name;

    
  }

  public submitBranch(data : FormGroup) {
      const newBranch : branch = {
        BranchId : data.controls['branchId'].value,
        BranchName : data.controls['branchName'].value,
        BranchDescription : data.controls['branchDescription'].value,
        BranchPortNumber : data.controls['branchPort'].value,
        BranchIpAddress : data.controls['branchIpAddress'].value,
        // BranchLogoUrl : data.controls['branchLogoUrl'].value,
        BranchIsActive : data.controls['branchIsActive'].value,
        BranchLogoUrl : this.ImgUrl
      }
    this.branchSer.createBranch(newBranch).subscribe((data) => {
      console.log(data);
    });
    this.addBranchForm.reset();
    this.ImgUrl = '';
    console.log(location.origin);
    
  }
}
