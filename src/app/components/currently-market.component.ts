import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-currently-market',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="currently-market">
      <div class="currently-market-box">

        <div class="section-heading">
          <div class="line-dec"></div>
          <h2><em>Items</em> Currently In The Market.</h2>
        </div>
        <ul>
            <!-- <li><a routerLink="allItems" routerLinkActive="active">All Items</a></li>
            <li><a routerLink="musicArt" routerLinkActive="active">Music Art</a></li>
            <li><a routerLink="digitalArt" routerLinkActive="active">Digital Art</a></li>
            <li><a routerLink="blockchain" routerLinkActive="active">Blockchain</a></li>
            <li><a routerLink="virtual" routerLinkActive="active">Virtual</a></li> -->
            <a>All Items</a>
            <a>Music Art</a>
            <a>Digital Art</a>
            <a>Blockchain</a>
            <a>Virtual</a>
          </ul>
      </div>
      <div class="currently-market-api">
      <div class="item" *ngFor="let post of posts | async">
        <img src="assets/market-01.jpg" alt="" class="market">
        <div class="item-text" >
          <h2>{{ post.text }}</h2>
          <div class="author">
            <img src="assets/current-04.jpg" alt="author image" class="author-image">
            <div class="text-author">
              <p>{{post.name}}</p>
              <a href="#">{{post.linkAuthor}}</a>
            </div>
          </div>
          <hr>
          <div class="bid-container">

            <span class="bid">
            <p>{{post.offre}}</p>
            <p>{{post.prefixe}}</p>
            <p>{{post.price}}</p>
            </span>
          <span class="ends">
            <p>{{post.expiration}}</p>
            <p>{{post.codeExpiration}}</p>
            <p>{{post.date}}</p>
          </span>
          </div>
          <a href="#">View item details</a>
        </div>
  </div>
      </div>
    </div>
  `,
  styles: [`

  .bid-container {
    display : flex;
    justify-content : space-between;
  }

a {
    color: #7453fc;
    font-weight: 700;
    margin-top: 5px;
    text-decoration : none
}

  .market {
    border-radius : 20px
  }

  .currently-market-api {
    display : grid;
  width : 82%;
  margin : auto;
  grid-template-columns: 1fr 1fr;
  flex-wrap : wrap;
  gap : 30px
  }

  .author {
    display : flex;
    align-items : center;
    gap : 20px;
  }

  .author-image {
    border-radius :50%;
    height : 80px;
    width : 80px
  }

  hr {
    margin : 30px 0
  }


  .currently-market-api .item {
    background-color: #282b2f;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #404245;
    position: relative;
    display : flex;
    // align-items: center;
    justify-content : center;
    gap : 20px;
    width : 100%
}
    
    
    .currently-market {
    background-image: url(/assets/dark-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px;
    position: relative;
    font-family : "Roboto", sans-serif;
    color : white
}

.currently-market-box {
  display : flex;
  width : 82%;
  margin : auto;
  justify-content : space-between
}

.section-heading {
    position: relative;
    z-index: 2;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: left;
}

.section-heading .line-dec {
    width: 100px;
    height: 2px;
    background-color: #7453fc;
    margin: 0 0 30px 0px;
}

.section-heading h2 {
    margin-top: 10px;
    line-height: 36px;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
}

.section-heading h2 em {
    color: #7453fc;
    font-style: normal;
}

ul {
      display: flex;
      gap: 20px;
    }

    ul a {
      display: block;
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    color: white;
    transition: all 0.3s ease 0s;
    border: transparent;
    padding: 8px 15px;
    border-radius: 18px;
    letter-spacing: 1px;
    text-decoration : none;
    }
    
    `]
})
export class CurrentlyMarketComponent {

  private ps = inject(DataService);  
  readonly posts = this.ps.getPosts();
}
