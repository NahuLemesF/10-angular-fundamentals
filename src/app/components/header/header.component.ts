import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, HeaderActionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
