/**
 * Title: calculator.component.ts
 * Author: William Austin
 * Date: 29 September 2023
 * Description: Calculator component (Home page)
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    loanAmount: number;
    interestRate: number;
    loanTerm: number;
    showResults = false;
    monthlyPayment: number;
    totalInterest: number;
    errorMessage: string = '';

    constructor(private _snackBar: MatSnackBar) { }


    calculateLoan() {
      if (
        isNaN(this.loanAmount) ||
        isNaN(this.interestRate) ||
        isNaN(this.loanTerm) ||
        this.loanAmount <= 0 ||
        this.interestRate <= 0 ||
        this.loanTerm <= 0
      ) {
        this.errorMessage = 'Please enter valid number values for all fields.';
        this.showResults = false;
      } else {
        const monthlyInterestRate = (this.interestRate / 100) / 12;
        const numberOfPayments = this.loanTerm * 12;
        const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

        const monthlyPaymentFloat = (this.loanAmount * (numerator / denominator));
        this.monthlyPayment = parseFloat(monthlyPaymentFloat.toFixed(2));

        const totalInterestFloat = (this.monthlyPayment * numberOfPayments) - this.loanAmount;
        this.totalInterest = parseFloat(totalInterestFloat.toFixed(2));

        this.errorMessage = '';
        this.showResults = true;
      }
    }
  }

