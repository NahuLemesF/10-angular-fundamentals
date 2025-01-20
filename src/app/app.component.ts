import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PlayerSectionComponent } from "./components/player-section/player-section.component";
import { CreatorSectionComponent } from "./components/creator-section/creator-section.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, PlayerSectionComponent, CreatorSectionComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
