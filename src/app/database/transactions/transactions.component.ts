
import { Component, OnInit } from '@angular/core';
import { TransactionCrudService } from 'src/app/Services/transaction-crud.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: any = [];

  constructor(private transactionCrudService: TransactionCrudService) { }

  ngOnInit(): void {

  this.transactionCrudService.getTransactions().subscribe(res=>{        
    this.transactions= res;
    console.log(this.transactions);
    console.log(this.transactions['data']);
  });
  }

 
  deleteTransaction(id:any){
    console.log(id);
    this.transactionCrudService.deleteTransaction(id).subscribe(res=>{
      console.log('delete');
      this.transactionCrudService.getTransactions().subscribe(res=>{        
        this.transactions= res;
    });
  })
}
}