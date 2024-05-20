import { Component } from '@angular/core';
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
  title = 'bdd-study';
}
