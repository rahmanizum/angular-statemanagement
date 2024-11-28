import { createActionGroup, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const bucketActions = createActionGroup({
    source: 'Bucket',
    events: {
        'Add To Bucket ': props<{payload: Bucket}>(),
        'Remove From Bucket': props<{payload: Partial<Bucket>}>()
    }
})