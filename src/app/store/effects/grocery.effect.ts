import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';
import { Grocery } from '../../../models/grocery.model';

@Injectable()
export class GroceryEffects {

    loadGroceries$ = createEffect(() => this.actions$.pipe(
    ofType(groceryAction.loadGroceries),
    exhaustMap(() => this.groceryService.fetchAllGroceries()
      .pipe(
        map((groceries: Grocery[]) => (groceryAction.loadGrocerySuccess({payload: groceries}))),
        catchError(() => of(groceryAction.loadGroceryFailure()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private groceryService: GroceryService
  ) {}
}