import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-learn-more-section',
  templateUrl: './learn-more-section.component.html',
  styleUrls: ['./learn-more-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LearnMoreSectionComponent implements AfterViewInit {
  @ViewChildren('videoWrapper') wrappers!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.wrappers.forEach((wrapper) => {
      const video = wrapper.nativeElement.querySelector('video') as HTMLVideoElement;

      if (video) {
        wrapper.nativeElement.addEventListener('mouseenter', () => {
          video.play();
        });

        wrapper.nativeElement.addEventListener('mouseleave', () => {
          video.pause();
        });
      }
    });
  }
}
