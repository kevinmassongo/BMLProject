import { Component } from '@angular/core';
import { AuthorBannerComponent } from '../components/author-banner.component';
import { AuthorSectionComponent } from '../components/author-section.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [AuthorBannerComponent, AuthorSectionComponent],
  template: `
    <app-author-banner />
    <app-author-section />
  `,
  styles: ``
})
export class AuthorComponent {

}
