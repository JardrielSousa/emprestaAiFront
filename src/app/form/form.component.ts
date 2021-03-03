import { ValidationsGenerics } from './../validations/validatorsGenerics';
import { LoanServiceService } from './../service/loan-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../model/loanReturn';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  mask: string;

  loan:Loan;

  UF = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RO',
    'RS',
    'RR',
    'SC',
    'SE',
    'SP',
    'TO',
  ];

  loanForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(256)],
    ],
    cpf: ['', [Validators.required,ValidationsGenerics.ValidaCpf]],
    age: ['', [Validators.required, Validators.maxLength(2)]],
    uf: ['', [Validators.required]],
    salary: [
      '',
      [Validators.required],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loanService: LoanServiceService
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.loanForm.controls
  }

  onSubmit() {
    this.loanForm.markAllAsTouched();
    if (this.loanForm.invalid) return;
    this.loanService.create(this.loanForm.value).subscribe((resp:any)=>{
      this.loan = resp;
      this.setLoan();
      this.router.navigate(['/consult']);
    },error=>{
      this.loanService.verMsg('Error or loan consult!!!',true);
    });

  }

  private setLoan() {
    localStorage.setItem('loan', JSON.stringify(this.loan));
  }
}
