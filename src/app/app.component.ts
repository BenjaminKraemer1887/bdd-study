import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideComponent } from './app/component/slide/slide.component';
import { FooterComponent } from './app/component/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlideComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('slideshow', { static: true })
  slideshow!: ElementRef<HTMLDivElement>;

  title = 'bdd-study';
  currentIndex: number = 0;

  showNextLevelImage = false;
  showAllTogetherImage = false;

  toolSlide = {
    showGherkinTitle: false,
    showGherkinDescription: false,
    showGherkinSyntax: false,
  };

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
