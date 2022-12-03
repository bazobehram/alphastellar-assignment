import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FieldsModel } from '../../models/fields';
import { add } from '../../store/actions/take-home.actions';

@Injectable({
  providedIn: 'root',
})
export class TakeHomeFacade {
  constructor(private store: Store<{ fields: Array<FieldsModel> }>) {
    this.list = this.store.select('fields');
  }

  list: Observable<FieldsModel[]>;

  add(input: FieldsModel) {
    this.store.dispatch(add({ fields: input }));
  }
}
