import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [UpperCasePipe],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
