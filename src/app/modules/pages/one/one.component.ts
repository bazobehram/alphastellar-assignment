import { JsonPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Optional,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../take-home/components/footer/footer.component';
import { HeaderComponent } from '../../take-home/components/header/header.component';
import { OneFormComponent } from '../../take-home/components/one-form/one-form.component';
import { FieldsModel } from '../../take-home/models/fields';
import { TakeHomeFacade } from '../../take-home/services/take-home/take-home.facade';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    OneFormComponent,
    ReactiveFormsModule,
    UpperCasePipe,
    JsonPipe,
    NgIf,
    NgFor,
  ],
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent {
  @Output() readonly formSubmit = new EventEmitter<FieldsModel>();
  constructor(private facade: TakeHomeFacade) {
    this.facade.list.subscribe((fields: Array<FieldsModel>) => {
      this.list = fields;
    });
    this.menuList = Array(10).fill('Menu Item');
  }

  list: Array<FieldsModel> = [];
  menuList: Array<Optional>;

  onSubmit(formData: FieldsModel) {
    if (formData) {
      this.facade.add(formData);
    }
  }
}
