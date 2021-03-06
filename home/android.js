class SellMenuCatAndroid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('android')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/ANDROID/categoria.html">
                            <img src="styles/assets/categorias/android-studio_text_white.png" alt="" width="auto" height="80" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Android pos-z l-menu"><a href="componentes/ANDROID/and_001.html"><del>INSTALACIÓN ANDROID STUDIO...</del></a></div>
                        <div class="col bg-Android rot-2 l-menu"><a href="componentes/ANDROID/and_002.html"><del>ELEMENTOS Y DESCRIPCIÓN</del></a></div>
                        <div class="col bg-Android rot-1 l-menu"><a href="componentes/ANDROID/and_003.html"><del>GENERAR APK</del></a></div>
                        <div class="col bg-Android rot-2 l-menu"><a href="componentes/ANDROID/and_004.html"><del>PLAY STORE</del></a></div>
                        <div class="col bg-Android pos-z l-menu"><a href="componentes/ANDROID/and_005.html"><del>PRUEBAS UNITARIAS</del></a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-android', SellMenuCatAndroid)