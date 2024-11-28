import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { bucketActions } from "../actions/bucket.action";

const initialState : Bucket[] = []

export const bucketReducer = createReducer(initialState,
    on(bucketActions.addToBucket, (state,action) => {
        const bucketItem = state.find(item => item.id === action.payload.id);
        if(bucketItem){
            return state.map(item => {
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        quantity:item.quantity + 1
                    }
                }
                return item;
            })
        }
        return [...state,action.payload]
    }),
    on(bucketActions.removeFromBucket,(state,action)=>{
        const bucketItem = state.find(item => item.id === action.payload.id);
        if(bucketItem && bucketItem.quantity > 1){
            return state.map(item => {
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        quantity:item.quantity - 1
                    }
                }
                return item;
            })
        }
        return state.filter(item => item.id !== action.payload.id)
    })
)