import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { LanguageMenuComponent } from "../language-menu/language-menu.component";

@Component({
  selector: 'app-header-actions',
  imports: [CommonModule, LanguageMenuComponent],
  templateUrl: './header-actions.component.html',
  styleUrl: './header-actions.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderActionsComponent {
  public items: string[] = ["English", "French"];

  public openLanguageMenu: boolean = false;
  @ViewChild('headerLanguageSelector', { static: true }) languageSelector!: ElementRef<HTMLElement>;

  isLanguageMenuExpanded = false;
  
  public toggleLanguageMenu(event: Event): void {
    
    event.preventDefault();
    this.isLanguageMenuExpanded = !this.isLanguageMenuExpanded;
    this.languageSelector.nativeElement.setAttribute('aria-expanded', this.isLanguageMenuExpanded.toString());
  }

}
