import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
    <div class="main-banner">
      <div class="banner-container">
        <div class="first-banner-box">
          <p class="first-paragraph">Liberty NFT Market</p>
          <h2>Create, sell & collect top nft's.</h2>
          <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
          <div class="section-heading-link">
          <li><a href="" class="explore-our-items">Explore Top NFTs</a></li>
          <li><a href="">Watch Our Videos</a></li>
        </div>
        </div>
        <div class="second-banner-box">
          <img src="assets/banner-01.png" alt="">
        </div>
      </div>
    </div>
  `,
  styles: [`
  .main-banner {
    background-image: url(/assets/banner-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding-top: 290px;
    padding-bottom: 240px;
    background-color: #2a2a2a;
}

.banner-container{
  display: grid;
  width : 82%;
  margin : auto;
  font-family : "Roboto", sans-serif;
  color : white;
  grid-template-columns: 1fr 1fr;
  gap : 5rem
}

img {
  width : 100%
}

.first-banner-box  .first-paragraph {
  font-size : 20px;
  font-weight : 500;
}

.first-banner-box  p{
  font-size: 15px;
  line-height: 30px;
  color: #fff;
}

.first-banner-box h2{
  color: #fff;
    font-size: 50px;
    font-weight: 700;
    line-height: 66px;
    text-transform: uppercase;
    margin-top : 10px
}

.section-heading-link {
  display : flex;
  margin-top : 30px;
  gap : 20px
}

.section-heading-link li {
  list-style: none;
}

.section-heading-link li a{
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

.section-heading-link li .explore-our-items:hover {
  background-color : #7453fc;
  color : #fff
}

.section-heading-link li a:hover {
  background-color : #fff;
  color : #7453fc
}
  
  `]
})
export class BannerComponent {

}
