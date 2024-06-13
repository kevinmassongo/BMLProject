import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  template: `

<div class="navbar-box">
        <nav class="main-nav">
          <a href="#">
            <img src="assets/logo.png" alt="">
          </a>
          <ul class="nav">
            <li><a routerLink="home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="explore" routerLinkActive="active">Explore</a></li>
            <li><a routerLink="item-details" routerLinkActive="active">Item Details</a></li>
            <li><a routerLink="author" routerLinkActive="active">Author</a></li>
            <li><a routerLink="create" routerLinkActive="active">Create Yours</a></li>
          </ul>
        </nav>
      </div>
      <router-outlet />
      <app-footer />
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
      width : 82%;
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
      gap: 20px;
    }

    .navbar-box .nav li {
      list-style-type : none
    }

    .navbar-box .nav li a {
      display: block;
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    color: #2a2a2a;
    transition: all 0.3s ease 0s;
    border: transparent;
    padding: 8px 15px;
    border-radius: 18px;
    letter-spacing: 1px;
    text-decoration : none
    }

    .navbar-box .nav li a.active {
      color: white;
      background-color: #7453fc;
    }
    `]
})
export class AppComponent {
  title = 'project';
}
