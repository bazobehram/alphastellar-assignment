import { createAction, props } from '@ngrx/store';
import { FieldsModel } from '../../models/fields';

export const add = createAction('[ADD] Add Fields', props<{fields: FieldsModel}>());
export const list = createAction('[LIST] List Fields');
