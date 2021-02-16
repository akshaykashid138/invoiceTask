import {customerConfig} from './customerConfig'

// import {Customer} from './customerClass'
import {Invoice} from './invoiceClass'

import {Account} from './accountClass'


//GetInvoice
(<HTMLElement>document.getElementById('getInvoice')).addEventListener('click',()=>{
    let cust_id=+((<HTMLFormElement>document.getElementById('customerId')).value);
    let cust_name=(<HTMLFormElement>document.getElementById('customerName')).value;
    let cust_dicount=+((<HTMLFormElement>document.getElementById('discount')).value);
    let inv_id=+((<HTMLFormElement>document.getElementById('invoiceId')).value);
    let inv_amount=+((<HTMLFormElement>document.getElementById('invoiceAmount')).value);
   
    let obj:customerConfig={
        customerId:cust_id,
        name:cust_name,
        discount:cust_dicount,
    }
    let invoiceInfo={
        invoiceId:inv_id,
        invoiceAmount:inv_amount
    }
    let invoiceobj=new Invoice(obj,invoiceInfo);
  
    let inform=(<HTMLElement>document.getElementById('invoiceInfo'));
    inform.style.display="block";
    (<HTMLElement>document.getElementById('cusid')).innerText=invoiceobj.getCustomerId().toString();
    (<HTMLElement>document.getElementById('cusname')).innerText=invoiceobj.getCustomerName();
    (<HTMLElement>document.getElementById('invid')).innerText=invoiceobj.getInvoiceId().toString();
    (<HTMLElement>document.getElementById('bframt')).innerText="Rs. "+invoiceobj.getAmount().toString();
    (<HTMLElement>document.getElementById('dis_rate')).innerText=invoiceobj.getDiscount()+"%";
    (<HTMLElement>document.getElementById('afterdis')).innerText="Rs. "+invoiceobj.getAmountAfterDiscount().toFixed(2);
});


let accountobj;
//add account..
(<HTMLElement>document.getElementById('add')).addEventListener('click',()=>{

    
    let getaccount=(<HTMLElement>document.getElementById('getaccount'));
    getaccount.style.display="block";
    let add=(<HTMLElement>document.getElementById('add'));
    add.style.display="none";
    let custId=+((<HTMLFormElement>document.getElementById('customerId')).value);
    let custName=(<HTMLFormElement>document.getElementById('customerName')).value;
    let accountId=+((<HTMLFormElement>document.getElementById('accountId')).value);
    let accountBalance=+((<HTMLFormElement>document.getElementById('balance')).value);
    
   
    let obj:customerConfig={
        customerId:custId,
        name:custName,
       
    }
    let accountInfo={
        id:accountId,
        balance:accountBalance
    }
    accountobj=new Account(obj,accountInfo);
});

(<HTMLElement>document.getElementById('getaccount')).addEventListener('click',()=>{
    let getAccBtn=(<HTMLElement>document.getElementById('getaccount'));
    getAccBtn.style.display="none";
    let addBal=(<HTMLElement>document.getElementById('addBal'));
    addBal.style.display="block";
    let deposite=(<HTMLElement>document.getElementById('deposite'));
    deposite.style.display="block";
    let withdraw=(<HTMLElement>document.getElementById('withdraw'));
    withdraw.style.display="block";
});

(<HTMLElement>document.getElementById('getaccount')).addEventListener('click',()=>{
    let inform=(<HTMLElement>document.getElementById('invoiceInfo'));
    inform.style.display="none";
    let info2=(<HTMLElement>document.getElementById('accountInfo'));
    info2.style.display="block";
    
    (<HTMLElement>document.getElementById('custAccId')).innerText=accountobj.getCustomerId().toString();
    (<HTMLElement>document.getElementById('custAccName')).innerText=accountobj.getCustomerName();
    (<HTMLElement>document.getElementById('accId')).innerText=accountobj.getAccountId().toString();
    (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
});



//deposite
    let transaction=+((<HTMLFormElement>document.getElementById('transaction')).value);
        (<HTMLElement>document.getElementById('deposite')).addEventListener('click',()=>{

            let transaction=+((<HTMLFormElement>document.getElementById('transaction')).value);
            accountobj.depositeAmount(transaction);
            (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
        });


   //withdraw    
   (<HTMLElement>document.getElementById('withdraw')).addEventListener('click',()=>{

    let transaction=+((<HTMLFormElement>document.getElementById('transaction')).value);
    accountobj.withdrow(transaction);
    (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
});
