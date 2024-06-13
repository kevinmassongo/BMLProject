import { Component } from '@angular/core';

@Component({
  selector: 'app-create-ntf',
  standalone: true,
  imports: [],
  template: `
    <div class="create-nft">
      <div class="section-heading">
        <div class="section-heading-title">
          <div class="line-dec"></div>
          <h2>Create Your NFT & Put It On The Market.</h2>
        </div>
        <div class="section-heading-link">
          <li><a href="">Create Your NFT Now</a></li>
        </div>
      </div>
      <div class="item">
          <div class="first-item">
            <div class="icon">
              <img src="/assets/icon-02.png" alt="first-icon">
            </div>
            <h4>Set Up Your Wallet</h4>
            <p>NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.</p>
          </div>
          <div class="second-item">
            <div class="icon">
              <img src="/assets/icon-04.png" alt="first-icon">
            </div>
            <h4>Add Your Digital NFT</h4>
            <p>There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required.</p>
          </div>
          <div class="third-item">
            <div class="icon">
              <img src="/assets/icon-06.png" alt="first-icon">
            </div>
            <h4>Sell Your NFT & Make Profit</h4>
            <p>If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.</p>
          </div>
        </div>
    </div>
  `,
  styles: [
    `
    h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: 700;
}
.create-nft {
    background-image: url(/assets/main-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px;
    position: relative;
    font-family : "Roboto", sans-serif;
}

.section-heading {
  display : flex;
  width : 82%;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
}

.section-heading .section-heading-title .line-dec {
    width: 100px;
    height: 2px;
    background-color: #FFF;
}

.section-heading .section-heading-title h2 {
    margin-top: 30px;
    line-height: 36px;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
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

.create-nft .item {
  margin-top : 30px;
  position : relative;
  display : grid;
  grid-template-columns: 1fr 1fr 1fr;
  width : 82%;
  margin : auto;
  margin-top : 40px;
  color : #fff
}

p {
    font-size: 15px;
    line-height: 30px;
    color: #fff;
}

.create-nft h4 {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
}

.create-nft p {
    margin-right: 30px;
}

.item .icon {
    width: 62px;
    height: 62px;
    display: inline-block;
    text-align: center;
    line-height: 62px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content : center;
    align-items : center
}

.create-nft .item .first-item:after {
    position: absolute;
    width: 1px;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.2);
    content: '';
    right: 5px;
    top: 5%;
}

.create-nft .item .second-item:after {
    position: absolute;
    width: 1px;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.2);
    content: '';
    right: 5px;
    top: 5%;
}
    
    `
  ]
})
export class CreateNtfComponent {

}
