export interface Payment {
    paymentMode: string;
    totalAmount: string;
    cardNumber: string;
    nameOnCard: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    personalInfo: string;
    billingInfo: string;
    firstName: string;
    middleName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    email: string;
}