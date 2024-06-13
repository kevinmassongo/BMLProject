import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-banner',
  standalone: true,
  imports: [],
  template: `
    <div class="explore-banner">
      <h6>Liberty NFT Market</h6>
      <h1>DISCOVER SOME TOP ITEMS</h1>
    </div>
  `,
  styles: [`

h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: 700;
}
    
    .explore-banner {
    background-image: url(/assets/heading-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    // padding-top: 250px;
    text-align: center;
    background-color: #2a2a2a;
    font-family : 'Roboto', sans-serif;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column
}

.explore-banner h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    line-height: 66px;
    text-transform: uppercase;
}

.explore-banner h6 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color : #fff;
    margin : 100px 0 15px 0
}
    
    `]
})
export class ExploreBannerComponent {

}
