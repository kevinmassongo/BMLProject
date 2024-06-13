import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-top-seller',
  standalone: true,
  imports: [],
  template: `
    <div class="top-seller">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h2>Our Top Sellers This Week.</h2>
      </div>
      <div class="section-item">
        <div class="item">
          <h4>1.</h4>
          <div class="icon">
            <img src="/assets/author.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>4.</h4>
          <div class="icon">
            <img src="/assets/author.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>7.</h4>
          <div class="icon">
            <img src="/assets/author.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>10.</h4>
          <div class="icon">
            <img src="/assets/author.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>2.</h4>
          <div class="icon">
            <img src="/assets/author-02.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>5.</h4>
          <div class="icon">
            <img src="/assets/author-02.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>8.</h4>
          <div class="icon">
            <img src="/assets/author-02.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>11.</h4>
          <div class="icon">
            <img src="/assets/author-02.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>3.</h4>
          <div class="icon">
            <img src="/assets/author-03.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>6.</h4>
          <div class="icon">
            <img src="/assets/author-03.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>9.</h4>
          <div class="icon">
            <img src="/assets/author-03.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
        <div class="item">
          <h4>12.</h4>
          <div class="icon">
            <img src="/assets/author-03.jpg" alt="author-1">
          </div>
          <div class="text">
            <h6>NFT Top Artist</h6>
            <a href="">8.6 ETH or $12,000</a>
          </div>
        </div>
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
    
    .top-seller {
    background-image: url(/assets/main-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px 90px 0px;
    position: relative;
    font-family : 'Roboto', sans-serif;
    color : white
}

.section-heading {
    position: relative;
    z-index: 2;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: center;
}

.section-heading .line-dec {
    width: 100px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto 30px auto;
}

.section-heading h2 {
    margin-top: 10px;
    line-height: 36px;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
}

.section-item{
  display : grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content : center;
  align-items : center
}

.section-item .item {
  display: flex;
  // align-items : center;
  justify-content : center;
  margin-bottom : 30px
}

.section-item .item h4 {
  font-size: 20px;
    margin-top: 12px;
    margin-right: 10px;
}

.section-item .item h6 {
  font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
}

.section-item .item a {
  font-size: 14px;
    cursor: auto;
    color: #fff;
    font-weight: 400;
    margin-top: 5px;
    text-decoration : none
}

.top-seller .item img {
    margin-right: 15px;
    border-radius : 50%
}
    
    `]
})
export class ExploreTopSellerComponent {

}
