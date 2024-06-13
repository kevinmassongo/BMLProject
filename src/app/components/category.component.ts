import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="category-box">
      <div class="first-box">
        <div class="section-heading">
          <div class="line-dec"></div>
          <h2>Browse Through Our <span>Categories</span> Here.</h2>
        </div>
        <div class="category">
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-01.png" alt="first-icon">
            </div>
            <h4>Blockchain</h4>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-02.png" alt="first-icon">
            </div>
            <h4>Digital Art</h4>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-03.png" alt="first-icon">
            </div>
            <h4>Music Art</h4>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-04.png" alt="first-icon">
            </div>
            <h4 class="virtual-world">Virtual World</h4>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-05.png" alt="first-icon">
            </div>
            <h4>Valuable</h4>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/assets/icon-06.png" alt="first-icon">
            </div>
            <h4>Triple NFT</h4>
          </div>
        </div>
      </div>
      <div class="second-box">
        <div class="section-heading">
          <div class="line-dec"></div>
          <h2>Explore Some Hot <span>Collections</span> In Market.</h2>
        </div>
      </div>
      <ul>
</ul>
    </div>
  `,
  styles: [
    `
    .category-box{
      background-image: url(/assets/dark-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px 150px 0px;
    position: relative;
    font-family : 'Roboto', sans-serif
    }

    .section-heading {
      display : flex;
      align-items : center;
      justify-content : center;
      flex-direction : column;
    }

    .section-heading .line-dec {
    width: 100px;
    height: 2px;
    background-color: #7453fc;
    margin: 0 auto 30px auto;
}

    .section-heading h2 {
    margin-top: 15px;
    line-height: 36px;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
}

.section-heading span{
  color :#7453fc;
}

.category {
  display : flex;
  width : 82%;
  margin : auto;
  justify-content : center;
  display : grid;
  gap : 30px;
  align-items : flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top : 60px
}

.category .item {
    background-color: #282b2f;
    text-align: center;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #404245;
    position: relative;
    justify-content : center;
    align-items: center;
    display : flex;
    flex-direction : column
}

.virtual-world {
  text-align : center
}

.category .item .icon {
    width: 62px;
    height: 62px;
    display: inline-block;
    text-align: center;
    line-height: 62px;
    background-color: #fff;
    border-radius: 50%;
    display : flex;
    align-items : center;
    justify-content : center
}

.category .item h4 {
    margin-top: 15px;
    font-size: 20px;
    color : white
}

.second-box .section-heading {
      display : flex;
      align-items : center;
      justify-content : center;
      flex-direction : column;
      margin-top : 120px
    }
    `
  ]
})
export class CategoryComponent {

  
  
}
