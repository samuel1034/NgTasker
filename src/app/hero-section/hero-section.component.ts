// Suggested code may be subject to a license. Learn more: ~LicenseLog:1215476023.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2594135017.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() title: string = 'Welcome to My App';
  @Input() subtitle: string = 'This is a hero section built with Angular 19.';
  @Input() callToAction: string = 'Learn More';
}
