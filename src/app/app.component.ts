import { Component, ViewEncapsulation } from '@angular/core';
import { PlayerSectionComponent } from "./components/player-section/player-section.component";
import { CreatorSectionComponent } from "./components/creator-section/creator-section.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ScrollWrapperComponent } from "./components/scroll-wrapper/scroll-wrapper.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";

@Component({
  selector: 'app-root',
  imports: [PlayerSectionComponent, CreatorSectionComponent, FooterComponent, ScrollWrapperComponent, HeaderComponent, MainSectionComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
}
