import { Component } from '@angular/core';

@Component({
  selector: 'app-language-menu',
  imports: [],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss'
})
export class LanguageMenuComponent {
  public items: string[] = ["English", "French"];
}
