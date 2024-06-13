import { Component } from '@angular/core';

@Component({
  selector: 'app-item-detail-view-detail',
  standalone: true,
  imports: [],
  template: `
    <div class="section-view-detail">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h2>View Details <span>For Item</span> Here.</h2>
      </div>
      <div class="section-for-items">
        <img src="assets/item-details-01.jpg" alt="item-details" class="item-details">
        <div class="item">
          <h4>Dolores Haze Westworld Eye</h4>
          <div class="author">
            <img src="assets/author-02.jpg" alt="">
            <div class="text">
              <h6>Liberty Artist</h6>
              <a href="">{{"@"}}libertyart</a>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="item-detail">
            <span>Current Bid <strong><br>6.06 ETH</strong> <br><em>($8,025.50)</em></span>
            <span>Owner <strong><br>David Walker</strong> <br><em>({{"@"}}davidwalker)</em></span>
            <span>Ends In <strong> <br>3D 05H 20M 58S</strong> <br> <em>(January 22nd, 2021)</em></span>
          </div>
          <form>
            <label for="bid">Place Bid : </label>
            <input type="text" class="input" value="1 ETH">
            <div class="link">
              <li><a href="">Submit Now</a></li>
            </div>
          </form>
        </div>
        </div>
        <div class="mini-heading">
          <h4 class="a">Current Biddings Prices (ETH)</h4>
          <form action="">
            <select>
              <option value="Sort By:Latest">Sort By:Latest</option>
              <option value="Sort By:Latest">Sort By:Oldest</option>
              <option value="Sort By:Latest">Sort By:Lowest</option>
              <option value="Sort By:Latest">Sort By:Highest</option>
            </select>
          </form>
        </div>
        <div class="all-authors">
          <div class="anAuthor">
            <div class="box">
              <img src="assets/current-01.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
            <div class="box">
              <img src="assets/current-02.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
            <div class="box">
              <img src="assets/current-03.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
            <div class="box">
              <img src="assets/current-02.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
            <div class="box">
              <img src="assets/current-04.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
            <div class="box">
              <img src="assets/current-01.jpg" alt="">
              <div class="right-content">
                <h4>David Walker</h4>
                <a href="">{{"@"}}davidwalker</a>
                <hr>
                <h6>Bid: <strong>0.06 ETH</strong></h6>
                <span class="date">24/07/2022, 22:00</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  `,
  styles: [`

.all-authors .anAuthor {
  display : grid;
  grid-template-columns: 1fr 1fr 1fr;
  width : 82%;
  margin : auto;
  gap : 25px
}

.all-authors .anAuthor hr {
  margin : 20px 0;
  background-color: transparent 
}

.all-authors .anAuthor .box{
    position: relative;
    z-index: 2;
    margin-top: 30px;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    background-color: #282b2f;
    border: 1px solid #404245;
}

.all-authors .anAuthor .right-content {
    padding: 30px;
    width: 100%;
}

.all-authors .anAuthor .right-content a {
    font-size: 15px;
    color: #7453fc;
    font-weight: 700;
    text-decoration : none;
}

.all-authors .anAuthor .right-content h6 em {
    font-size: 18px;
    color: #7453fc;
    font-style: normal;
    font-weight: 700;
}

.all-authors .anAuthor .right-content h6 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 8px;
}

.all-authors .anAuthor .right-content span.date {
    font-size: 15px;
    color: #7453fc;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: 700;
}

    .section-view-detail {
      background-image: url(/assets/dark-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px 120px 0px;
    position: relative;
    font-family : "Roboto", sans-serif;
    color : #fff
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

.section-for-items {
  display : grid;
  grid-template-columns: 1.3fr 1fr;
  align-items:center;
  width : 82%;
  margin : auto;
  gap : 50px;
  margin-top : 90px
}

.section-for-items .item-details {
    width: 100%;
    overflow: hidden;
    border-radius : 20px
}

.section-for-items .item p {
    position: relative;
    z-index: 2;
    margin-bottom : 30px
}

.section-for-items .author img {
  border-radius : 50%;
}

.section-for-items .author {
    display: flex;
    align-items : center;
    margin: 20px 0;
    gap : 20px
}

.section-for-items h4 {
    font-size: 20px;
    margin-bottom: 25px;
}

.section-for-items .item-detail {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.section-for-items .item-detail span {
  line-height: 35px;
    position: relative;
    z-index: 2;
}

.section-for-items .item-detail span strong {
    font-size: 20px;
    color: #7453fc;
}

.section-for-items .item-detail span.ends em, .section-for-items .item-detail span.owner em {
    font-style: normal;
    color: #afafaf;
}

form {
  display : flex;
  align-items : center;
  gap : 20px;
  margin-top : 40px
}

.input {
  font-size: 14px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #7453fc;
    padding: 12px 0px;
    width : 100px;
    display: inline-block;
    border-radius: 25px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    text-decoration:none;
    text-align : center
}

.input:after {
    width: 78%;
    height: 2px;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

.link li {
  list-style: none;
}

.link li a{
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

.link li a:after {
    width: 78%;
    height: 2px;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

.mini-heading {
  display : flex;
  justify-content : space-between;
  align-items: center;
  width : 82%;
  margin : auto;
  gap : 50px;
  margin-top : 90px
}

.mini-heading h4 {
    background-color: #7453fc;
    display: inline-block;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 22px;
}

.mini-heading select {
    float: right;
    width: 150px;
    background-color: transparent;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
}


    
    `]
})
export class ItemDetailViewDetailComponent {

}
