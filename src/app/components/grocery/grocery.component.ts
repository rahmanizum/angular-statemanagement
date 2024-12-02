import { Component, OnInit, Signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { bucketActions } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceriesByType } from '../../store/selectors/grocery.selector';
import { groceryAction } from '../../store/actions/grocery.action';
import { Bucket } from '../../../models/bucket.model';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent implements OnInit {
  groceries$?: Observable<Grocery[]> = this.store.select(selectGroceries);
  
  ngOnInit(): void {
    
  }

  constructor(private store: Store<{ bucket: Bucket[] , groceries: Grocery[] }>) {
    this.store.dispatch(groceryAction.loadGroceries())
   }

  onTypeChange(event: Event) {
    const type = (event.target as HTMLSelectElement).value;
    this.groceries$ = this.store.select(selectGroceriesByType(type));
  }

  increment(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };
    this.store.dispatch(bucketActions.addToBucket({ payload }));
  }
  decrement(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
    };
    this.store.dispatch(bucketActions.removeFromBucket({ payload }));
  }
}
