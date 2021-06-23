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

            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
            </ul>
            
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="styles/assets/slider/slide_1_atributos-css.jpg" alt="Los Angeles" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/slide_2_instalacion-angular2.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/slide_3_tipo_de_elementos_partes.jpg" alt="Chicago" class="img-fluid">
              </div>
              <div class="carousel-item">
                <img src="styles/assets/slider/slide_4_tipo_de_elementos_partes.jpg" alt="Chicago" class="img-fluid">
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