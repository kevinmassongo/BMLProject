import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="navbar-box">
        <nav class="main-nav">
          <a href="#">
            <img src="assets/logo.png" alt="">
          </a>
          <ul class="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Item Details</a></li>
            <li><a href="#">Author</a></li>
            <li><a href="#">Create Yours</a></li>
          </ul>
        </nav>
      </div>
  `,
  styles: [`
      .navbar-box {
        position : absolute;
        z-index : 99;
        width : 100%;
        padding : 30px 0
    }
    .main-nav {
      display : flex;
      justify-content: space-between;
      align-items : center;
      width : 78%;
      margin:auto;
      font-size : 16px;
      color : #212529;
      padding : 15px 30px;
      border-radius: 60px;
      background-color : #fff;
      font-family : 'Roboto', sans-serif;
    }

    .navbar-box .nav {
      display: flex;
      gap: 50px;
    }

    .navbar-box .nav li {
      list-style-type : none
    }

    .navbar-box .nav li a {
      text-decoration : none;
      color : #212529;
      font-weight : 400;
      font-size : 16px
    }
    `]
})
export class HeaderComponent {

}
