import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  paymentFormData: Payment;
  constructor() {
    this.paymentFormData = {
      paymentMode: '',
      totalAmount: '',
      cardNumber: '',
      nameOnCard: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      personalInfo: '',
      billingInfo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    };
  }

  resetForm() {
     this.paymentFormData = {
      paymentMode: '',
      totalAmount: '',
      cardNumber: '',
      nameOnCard: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      personalInfo: '',
      billingInfo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    };
  }

  ngOnInit(): void {
  }

  saveData() {
    console.log('payment form data==> ', this.paymentFormData);
    this.resetForm();
  }

}
