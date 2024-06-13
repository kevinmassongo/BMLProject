import { Component } from '@angular/core';

@Component({
  selector: 'app-create-section',
  standalone: true,
  imports: [],
  template: `
    <div class="create-section">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h2>Apply For <span>Your Item</span> Here.</h2>
      </div>
      <form id="contact">
        <div class="item-title">
          <label for="title">Item Title</label>
          <input type="text" placeholder="Ex. Lyon King">
        </div>
        <div class="item-description">
          <label for="title">Description For Item</label>
          <input type="text" placeholder="Give us your idea">
        </div>
        <div class="item-username">
          <label for="username">Your Username</label>
          <input type="text" placeholder="Ex.@alansmithee">
        </div>
        <div class="item-price">
          <label for="price">Price Of Item</label>
          <input type="text" placeholder="Price depends on quality. Ex 0.06 ETH">
        </div>
        <div class="royalties">
          <label for="price">Common royalties 1-25%</label>
          <input type="text" placeholder="Price depends on quality. Ex 0.06 ETH">
        </div>
        <div class="royalties">
          <label for="price">Your File</label>
          <input type="file" placeholder="Aucun fichier choisi">
        </div>
        <div class="button">
          <li><a href="" class="explore-our-items">Submit Your Applying</a></li>
        </div>
      </form>
    </div>
  `,
  styles: [`
    
    .create-section {
    background-image: url(/assets/dark-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 120px 0px 120px 0px;
    position: relative;
    font-family : "Roboto", sans-serif;
    color : white
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-weight: 700;
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

#contact {
    background-color: #37393c;
    border-radius: 20px;
    padding: 60px 30px;
    margin-bottom: 120px;
}

form {
  margin-top : 40px;
}

#contact input {
    width: 100%;
    height: 46px;
    text-align: left;
    padding: 0px 15px;
    background-color: #282b2f;
    border: 1px solid #404245;
    margin-bottom: 30px;
    font-weight: 500;
    color: #afafaf;
    border-radius : 23px
}
    
    `]
})
export class CreateSectionComponent {

}
