import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SlideComponent} from "./app/component/slide/slide.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bdd-study';
}
