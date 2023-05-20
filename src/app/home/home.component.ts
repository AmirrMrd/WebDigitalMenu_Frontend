import { Component, OnInit } from '@angular/core';

import { BranchService } from '../services/branch.service';
import { branch } from '../models/branchModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  branchItem : branch[] = [];

  constructor ( private branchSer  : BranchService ) {  }
  ngOnInit(): void {
    this.getAllBranches();
  }

  public getAllBranches() {
    this.branchSer.getAllBranch().subscribe((data) => {
      this.branchItem = data;
    });
  }

  
  
}
