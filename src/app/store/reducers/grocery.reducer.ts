import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryAction } from "../actions/grocery.action";

// const initialState : Grocery[] = [
//     {"id": 1, "name": "Apple", "type": "fruit" },
//     {"id": 2, "name": "Banana", "type": "fruit" },
//     {"id": 3, "name": "Cereal", "type": "snacks" },
//     {"id": 4, "name": "Chips", "type": "snacks" }
// ]
const initialState:Grocery[] = []
export const groceryReducer = createReducer(initialState,
    on(groceryAction.loadGrocerySuccess, (state,action) => action.payload),
    on(groceryAction.loadGroceryFailure, state => state)
)