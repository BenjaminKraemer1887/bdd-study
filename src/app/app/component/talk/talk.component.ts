import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { NgClass } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-talk',
  standalone: true,
  imports: [SlideComponent, NgClass, FooterComponent],
  templateUrl: './talk.component.html',
  styleUrl: './talk.component.scss',
})
export class TalkComponent {
  showNextLevelImage = false;
  showAllTogetherImage = false;

  toolSlide = {
    showGherkinTitle: false,
    showGherkinDescription: false,
    showGherkinSyntax: false,
  };

  @ViewChild('slideshow', { static: true })
  slideshow!: ElementRef<HTMLDivElement>;

  currentIndex: number = 0;

  @HostListener('wheel', ['$event']) slideByScroll(scroll: WheelEvent) {
    if (scroll.deltaY == 0) return;
    if (scroll.deltaY < 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
  }

  nextSlide() {
    const container = this.slideshow.nativeElement;
    const totalSlides = container.children.length;
    if (this.currentIndex < totalSlides - 1) {
      this.currentIndex++;
      this.scrollToSlide(this.currentIndex);
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToSlide(this.currentIndex);
    }
  }

  scrollToSlide(index: number) {
    const container = this.slideshow.nativeElement;
    const slideHeight = container.children[0].children[0].clientHeight;
    container.scrollTo({
      top: index * slideHeight,
      behavior: 'smooth',
    });
  }
}
