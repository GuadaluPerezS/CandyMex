myFooter();


function myFooter() {
  document.getElementById("foot").innerHTML = '';
  foot.innerHTML = `
            
    <div class="col-sm-3 my-1" >
      
      <a  href="index.html">
        <img src="img/logo.png" alt="CandyMex" width="160 " >
      </a>
      <p class="text-gray">Copyright ©2023</p>
    
      
    </div>

    <div class="col-sm-6 my-1" >
      <div class="hstack gap-3 text-gray">
          <div class="mx-auto">
          <a href="nosotros.html" class="font-foot" id="txEs4">Nosotros</a>
          <a href="nosotros.html" class="font-foot" id="txEn4">About Us</a>
          </div>
          <div class="vr "></div>
          <div class="mx-auto">
          <a href="eventos.html" class="font-foot" id="txEs5">Eventos</a>
          <a href="eventos.html" class="font-foot" id="txEn5">Special events</a>
          </div>
          <div class="vr"></div>
          <div class=" mx-auto">
          <a href="legales.html" class="font-foot" id="txEs6">Política de Privacidad & cookies</a>
          <a href="legales.html" class="font-foot" id="txEn6">Privacy & Cookies Policy</a>
          </div>
      </div>


      <div class="col-sm-12 my-2" >
        <div class="hstack gap-3">
          <a class="mx-auto" href="https://www.facebook.com/login/identify">
             <img src="img/facebook.png" alt="CandyMex" width="60 " >
          </a>
          <a class="mx-auto" href="https://twitter.com/?lang=es">
              <img src="img/twitter.png" alt="CandyMex" width="60 " >
          </a>
        </div>
      </div>

    </div>
        `;
}
