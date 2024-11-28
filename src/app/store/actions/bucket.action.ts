import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const  AddtoBucket = createAction(
    '[Bucket] Add To Bucket',
     props<{payload:Bucket}>()
    )
export const RemoveFromBucket = createAction(
    '[Bucket] Remove From Bucket',
     props<{payload:Partial<Bucket>}>()
    )