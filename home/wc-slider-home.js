class SellSliderHome extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="row pt-5">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div id="demo" class="carousel slide sombraUno" data-ride="carousel">
            
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="styles/assets/slider/javascript.jpg" alt="Los Angeles" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/angular.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/linux.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/flutter.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/dart.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/git.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/android.jpg" alt="Chicago" class="img-fluid">
              </div>
            </div>
            
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
    `;
    }
  }
window.customElements.define('sell-slider-home', SellSliderHome)