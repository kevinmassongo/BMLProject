import { Component } from '@angular/core';


@Component({
  selector: 'app-author-section',
  standalone: true,
  imports: [],
  template: `
    <div class="author-section">
      <div class="author-container">
        <div class="author">
          <img src="assets/current-04.jpg" alt="">
          <div class="text-author">
            <h4>
              Melanie Smith
            </h4>
            <a href="">{{"@"}}melanie32</a>
          </div>
        </div>
        <div class="right-info">
          <div class="info-item">
            
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    
    .author-section {
    background-image: url(/assets/dark-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px 120px 0px;
    position: relative;
}

.author-section .author-container {
  display: flex ;
  width : 82%;
  margin : auto;
  align-items : center;
  justify-content : space-between
}

.author-section .author-container .author {
  display : flex
  
}

.author-section .author-container .author img {
  width : 100%;
  border-radius : 50%
}

.author-section .author-container .right-info {
  background-color: #282b2f;
    border: 1px solid #404245;
    padding: 20px 30px;
    border-radius: 20px;
    margin-left: 100px;
}

    `]
})
export class AuthorSectionComponent {

}
