import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

import { MenuNavigationComponent } from "./dashboard/menu-navigation/menu-navigation.component";
import { SliderComponent } from "./dashboard/slider/slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, JsonPipe, MenuNavigationComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vertexFrontend';
}
