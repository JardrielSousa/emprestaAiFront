import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loanReturn';

@Component({
  selector: 'app-load-read',
  templateUrl: './load-read.component.html',
  styleUrls: ['./load-read.component.sass']
})
export class LoadReadComponent implements OnInit {

  loan:Loan
  constructor() { }

  ngOnInit(): void {
    this.loan = JSON.parse(localStorage.getItem('loan'))
  }

}
