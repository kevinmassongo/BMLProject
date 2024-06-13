import { Component } from '@angular/core';

@Component({
  selector: 'app-author-banner',
  standalone: true,
  imports: [],
  template: `
    <div class="author-banner">
        <h6>Liberty NFT Market</h6>
        <h1>VIEW ITEM DETAILS</h1>
        <div class="section-heading-link">
          <li><a href="" class="explore-our-items">Explore our items</a></li>
          <li><a href="">Create Your NFT Now</a></li>
        </div>
    </div>
  `,
  styles: [`
    
    h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: 700;
}
    
    .author-banner {
    background-image: url(/assets/heading-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    // padding-top: 250px;
    height : 100vh;
    text-align: center;
    background-color: #2a2a2a;
    font-family : "Roboto", sans-serif;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column
}

.author-banner h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    line-height: 66px;
    text-transform: uppercase;
}

.author-banner h6 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color : #fff;
    margin : 100px 0 15px 0
}

.section-heading-link {
  display : flex;
  align-items : center;
  justify-content : center;
  margin-top : 30px;
  gap : 20px
}

.section-heading-link li {
  list-style: none;
}

.section-heading-link li a{
    font-size: 14px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #7453fc;
    padding: 12px 30px;
    display: inline-block;
    border-radius: 25px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    text-decoration:none
}

.section-heading-link li a:after {
    width: 78%;
    height: 2px;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

.section-heading-link li .explore-our-items{
    font-size: 14px;
    color: #fff;
    background-color: #7453fc;
    border: 1px solid #7453fc;
    padding: 12px 30px;
    display: inline-block;
    border-radius: 25px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    text-decoration:none
}

.section-heading-link li .explore-our-items:hover {
  background-color : #fff;
  color : #7453fc
}

.section-heading-link li a:hover {
  background-color : #7453fc;
}
    
    `]
})
export class AuthorBannerComponent {

}
