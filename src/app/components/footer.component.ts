import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="footer">
      Copyright © 2022 Liberty NFT Marketplace Co., Ltd. All rights reserved.    Designed by TemplateMo
    </div>
    
  `,
  styles: [`
    .footer{
      background-color : #7453fc;
      font-family : "Roboto", sans-serif;
      font-size : 20px;
      background-color : #7453fc;
      text-align : center;
      padding : 20px;
      color : white
    }
    
    `]
})
export class FooterComponent {

}
