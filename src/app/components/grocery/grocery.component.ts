import { Component, Signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AddtoBucket, RemoveFromBucket } from '../../store/actions/bucket.action';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  groceries$?:Observable<Grocery[]> = this.store.select('groceries')

  constructor(private store : Store<{groceries:Grocery[]}>){

  }

  onTypeChange(event: Event){

  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    this.store.dispatch(AddtoBucket({payload}))
  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }
    this.store.dispatch(RemoveFromBucket({payload}))
  }

}
