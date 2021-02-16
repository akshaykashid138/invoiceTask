import {Customer} from './customerClass'
// import {Invoice} from './invocieClass'

export class Account extends Customer{
    accountId:number
    customerName:string
    balance:number

    constructor(obj,accountInfo){
        super(obj)
        this.accountId=accountInfo.id
        this.customerName=obj.name
        this.balance=accountInfo.balance

    }

    getAccountId(){
        return this.accountId
    }

    setAccountId(id:number){
        this.accountId=id
    }

    getCustomer(){
        return this.toString()
    }

    getBalance():number{
        return this.balance
       
    }

    setBalance(bal:number)
    {
        this.balance=bal
       
    }
   

    getCustomerName():string{
        return this.customerName
    }

    depositeAmount(amount:number){
        let val=this.balance+amount
        this.setBalance(val)
        return this.balance
        // console.log("After deposite",this.balance)
    }

    withdrow(amount:number){
        let bal=this.getBalance()
        let result;
        if(bal<amount){
            result="Insufficient Balanace"
        }
        else{
            this.balance=this.balance-amount
            result=this.balance
        }
        return result
        
    }
        
    

}