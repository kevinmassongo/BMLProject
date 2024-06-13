import { Component } from '@angular/core';
import { CreateBannerComponent } from '../components/create-banner.component';
import { CreateSectionComponent } from '../components/create-section.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CreateBannerComponent, CreateSectionComponent],
  template: `
    <app-create-banner />
    <app-create-section />
  `,
  styles: ``
})
export class CreateComponent {

}
