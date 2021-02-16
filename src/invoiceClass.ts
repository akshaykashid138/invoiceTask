import { Customer } from './customerClass';
// import {customerConfig} from './customerConfig'
// import {Customer as Cust} from './customerClass'

export class Invoice extends Customer {
    invoiceId:number;
    customer:Customer;
    invoiceAmount:number

    constructor(customerObj,invoiceObj){
        super(customerObj)
        this.invoiceId=invoiceObj.invoiceId
        this.customer=customerObj
        this.invoiceAmount=invoiceObj.invoiceAmount;
    }

    getInvoiceId(){
        return this.invoiceId
    }

    setInvoiceID(id:number){
         this.invoiceId=id
    }

    getCustomer():string{
        return this.toString()
        console.log(this.customer)
    }

    setCutomer(customerObj){
        this.customerID=customerObj.customerId
        this.customerName=customerObj.name
        this.customerDiscount=customerObj.discount

    }

    getAmount(){
       return this.invoiceAmount
    }

    setAmount(amount:number){
        this.invoiceAmount=amount
    }

    // getCustomerName():string{
    //     return this.getCustomerName()
    // }

    getAmountAfterDiscount():number{
        let discount =this.invoiceAmount-(this.invoiceAmount*this.customerDiscount/100)
        return discount
    }
}