import { Component } from '@angular/core';
import { BranchService } from '../branches/add-branch/branch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private branchSer  : BranchService) { 
    this.branchSer.getAllBranch().subscribe((data) => {
      console.log(data);
    })
  }
}
