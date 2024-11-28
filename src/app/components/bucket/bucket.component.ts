import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { groceryAction } from '../../store/actions/grocery.action';
import { GroceryService } from '../../grocery.service';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]> = this.store.select('bucket')

   constructor(private groceryService: GroceryService, private store: Store<{ bucket: Bucket[] }>) {
    this.groceryService.fetchAllGroceries().subscribe(data => {
      this.store.dispatch(groceryAction.loadGrocerySuccess({ payload: data }));
    });
    
   }

}
