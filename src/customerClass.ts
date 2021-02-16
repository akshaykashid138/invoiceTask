import {customerConfig} from './customerConfig'


export class Customer{

    customerID:number;
    customerName:string
    customerDiscount:number;

    constructor(obj:customerConfig){
        this.customerID=obj.customerId;
        this.customerName=obj.name;
        this.customerDiscount=obj.discount;
    }

    getCustomerId():number{
        return this.customerID
        console.log(this.customerID)
    }

    getCustomerName():string{
        return this.customerName
    console.log(this.customerName)
    }

    setCustomerName(name:string){
        this.customerName=name
    }

    getDiscount(){
        return this.customerDiscount
console.log(this.customerDiscount)
    }

    setDiscount(discount:number){
        this.customerDiscount=discount
    }

    toString():string{
        return `this.customerName this.customerID this.customerDiscount`
    }
}