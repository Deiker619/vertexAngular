import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
