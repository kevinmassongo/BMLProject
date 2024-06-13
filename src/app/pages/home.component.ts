import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { BannerComponent } from '../components/banner.component';
import { CategoryComponent } from '../components/category.component';
import { CreateNtfComponent } from '../components/create-ntf.component';
import { CurrentlyMarketComponent } from '../components/currently-market.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, CategoryComponent, CreateNtfComponent, CurrentlyMarketComponent],
  template: `
    <!-- <app-header/> -->
    <app-banner/>
    <app-category/>
    <app-create-ntf/>
    <app-currently-market/>
  `,
  styles: ``
})
export class HomeComponent {

}
