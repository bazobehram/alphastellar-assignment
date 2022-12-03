import { createReducer, on } from '@ngrx/store';
import { FieldsModel } from '../../models/fields';
import { add } from '../actions/take-home.actions';

export const initialState: Array<FieldsModel> = [];

export const takeHomeReducer = createReducer(
  initialState,
  on(add, (state, { fields }) => {
    return [...state, fields];
  })
);
