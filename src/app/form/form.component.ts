import { LoanServiceService } from './../service/loan-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  mask: string;

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
    cpf: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.maxLength(2)]],
    uf: ['', [Validators.required]],
    salary: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(256)],
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
    let Form = JSON.stringify(this.loanForm.value);
    this.loanService.create(Form).subscribe((resp:any)=>{
      console.log(resp.content);

    });
  }
}
