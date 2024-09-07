import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-navigation',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menu-navigation.component.html',
  styleUrl: './menu-navigation.component.css'
})
export class MenuNavigationComponent {
  
}
