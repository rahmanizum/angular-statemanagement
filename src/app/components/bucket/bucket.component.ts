import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { groceryAction } from '../../store/actions/grocery.action';
import { GroceryService } from '../../grocery.service';
import { Grocery } from '../../../models/grocery.model';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]> = this.store.select('bucket')

   constructor(private store: Store<{ bucket: Bucket[] , groceries: Grocery[] }>) {
    this.store.dispatch(groceryAction.loadGroceries())
   }

}
