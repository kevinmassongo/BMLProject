import { Component } from '@angular/core';
import { ExploreBannerComponent } from '../components/explore-banner.component';
import { ExploreTopSellerComponent } from '../components/explore-top-seller.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ExploreBannerComponent, ExploreTopSellerComponent],
  template: `
    <app-explore-banner />
    <app-explore-top-seller />
  `,
  styles: ``
})
export class ExploreComponent {

}
