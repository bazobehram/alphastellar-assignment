import { JsonPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldsModel } from '../../models/fields';
import { FieldsName } from '../../models/fields-name';
import { TakeHomeFacade } from '../../services/take-home/take-home.facade';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, JsonPipe, NgIf, NgFor],
  selector: 'app-one-form',
  templateUrl: './one-form.component.html',
  styleUrls: ['./one-form.component.scss']
})
export class OneFormComponent {
  constructor(private facade: TakeHomeFacade) {
  this.menuList = Array(10).fill('Menu Item');
  }
  @Output() readonly formSubmit = new EventEmitter<FieldsModel>();
  readonly fieldsName = FieldsName;
  menuList: Array<Optional>;
  

  oneForm = new FormGroup({
    textFormField1: new FormControl(null, [Validators.required]),
    textFormField2: new FormControl(null, [Validators.required]),
    textFormField3: new FormControl(null, [Validators.required]),
    textFormField4: new FormControl(null, [Validators.required]),
  });

  onSubmit() {
    if(this.oneForm.valid) {
     this.formSubmit.emit(this.oneForm.value as FieldsModel);
    }   
  }

  onClear() {
    this.oneForm.reset();
  }

  get textFormField1() {
    return this.oneForm.get(this.fieldsName.textFormField1);
  }

  get textFormField2() {
    return this.oneForm.get(this.fieldsName.textFormField2);
  }
  
  get textFormField3() {
    return this.oneForm.get(this.fieldsName.textFormField3);
  }

  get textFormField4() {
    return this.oneForm.get(this.fieldsName.textFormField4);
  }

}
