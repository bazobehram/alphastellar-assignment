import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [UpperCasePipe],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
