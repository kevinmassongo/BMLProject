import { Component } from '@angular/core';
import { ItemDetailBannerComponent } from '../components/item-detail-banner.component';
import { ItemDetailViewDetailComponent } from '../components/item-detail-view-detail.component';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [ItemDetailBannerComponent,ItemDetailViewDetailComponent ],
  template: `
    <app-item-detail-banner />
    <app-item-detail-view-detail />
  `,
  styles: ``
})
export class ItemDetailsComponent {

}
