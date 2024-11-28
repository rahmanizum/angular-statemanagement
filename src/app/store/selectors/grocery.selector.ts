import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

export const selectGroceries = createFeatureSelector<Grocery[]>('groceries')

export const selectGroceriesByType = (type: string) =>
    createSelector(selectGroceries, (groceries: Grocery[]) => {
      if (type) {
        return groceries.filter((groc) => groc.type === type);
      }
      return groceries;
    });
