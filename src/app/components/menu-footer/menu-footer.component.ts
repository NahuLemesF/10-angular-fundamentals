import { Component, ViewEncapsulation } from '@angular/core';
import { SubMenuComponent } from "../sub-menu/sub-menu.component";
import { SubMenuImageComponent } from "../sub-menu-image/sub-menu-image.component";
import { IMenuItem } from '../../interfaces/IMenuItem';

@Component({
  selector: 'app-menu-footer',
  imports: [SubMenuComponent, SubMenuImageComponent],
  templateUrl: './menu-footer.component.html',
  styleUrl: './menu-footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuFooterComponent {
  public menuImage1: IMenuItem[] = [
    { url: './images/download-iphone-btn.avif', alt: 'Download on the App Store' },
    { url: './images/download-google-btn.avif', alt: 'Get it on Google Play' },
    { url: './images/download-legacy-btn.avif', alt: 'Download Legacy Player' },
    { url: './images/download-dev-btn.png',  alt: 'Legacy Player Developer' },
  ];

  public menuImage2: IMenuItem[] = [
    { url: "./images/facebook-logo.svg", alt:"Facebook logo" },
    { url: "./images/instagram-logo.svg", alt:"Instagram logo" },
    { url: "./images/twitter-logo.svg", alt:"Twitter Logo" },
    { url: "./images/youtube-logo.svg", alt:"Youtube Logo" },
    { url: "./images/linkedin-logo.svg", alt:"Linkedin Logo" },
  ]
}
