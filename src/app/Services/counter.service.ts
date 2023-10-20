import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  private counter = new BehaviorSubject<number>(0);
  get_Counter(){
    return  this.counter.asObservable();
   }
 set_Counter(newVal : number){
     this.counter.next(newVal)
   }
}
