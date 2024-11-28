import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { AddtoBucket, RemoveFromBucket } from "../actions/bucket.action";

const initialState : Bucket[] = []

export const bucketReducer = createReducer(initialState,
    on(AddtoBucket, (state,action) => {
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
    on(RemoveFromBucket,(state,action)=>{
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