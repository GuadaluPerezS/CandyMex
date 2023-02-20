myHeader();


function myHeader() {
  document.getElementById("header").innerHTML = '';
  header.innerHTML = `
            
            <div class="col-sm-9" >

    
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="img/logo.png" alt="CandyMex" width="114">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav nav-tabs mx-auto menu-principal" >

        <li class="nav-item align-self-center" id="txEs1">
          <a class="nav-link" aria-current="page" href="caseros.html"> Caseros </a>
        </li>
        <li class="nav-item align-self-center" id="txEs2">
          <a class="nav-link" href="deMarca.html"> De marca </a>
        </li>


          <li class="nav-item align-self-center" id="txEn1">
          <a class="nav-link" aria-current="page" href="caseros.html"> Homemade </a>
        </li>
        <li class="nav-item align-self-center" id="txEn2">
          <a class="nav-link" href="deMarca.html"> Branded </a>
        </li>


      </ul>



      <ul class="navbar-nav nav-pills justify-content-end">
        <li class="nav-item align-self-center">
          <!-- Button trigger modal -->
      <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="button-in" id="txEs3">
      Entrar
      </a>
      <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="button-in" id="txEn3">
      Welcome
      </a>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
           <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresa tu información</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
             <div class="modal-body">
               <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                <label for="nameId" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nameId" required>
                  <div class="valid-feedback">
                   Lindo Nombre
                  </div>
                  <div class="invalid-feedback">
                   ¿Cómo te llamas?
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="surnameId" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="surnameId" required>
                  <div class="valid-feedback">
                   Bien
                  </div>
                  <div class="invalid-feedback">
                   ¿Cuál es tu apellido?
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="nicknameId" class="form-label">Apodo</label>
                  <input type="text" class="form-control" id="nicknameId" required>
                  <div class="valid-feedback">
                    Buena elección
                  </div>
                  <div class="invalid-feedback">
                   ¿Cómo te gustaría que te llamara?
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="mailId" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="mailId" required>
                  <div class="valid-feedback">
                    Te llegará un e-mail para confirmar
                  </div>
                  <div class="invalid-feedback">
                   Escribe tu correo
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="passwordId" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="passwordId" required>
                  <div class="valid-feedback">
                    Este será tu secreto
                  </div>
                  <div class="invalid-feedback">
                   Elige una contraseña que recuerdes
                  </div>
                </div>


                <div class="col-md-3">
                  <label for="validationDefault04" class="form-label">Lugar</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value=""></option>
                      <option id="EU">Estados Unidos</option>
                      <option>Union Europea</option>
                  </select>
                  <div class="valid-feedback">
                    Lindo lugar
                  </div>
                  <div class="invalid-feedback">
                   ¿De dónde eres?
                  </div>

                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                    <label class="form-check-label" for="invalidCheck2">

                     ¿estas de acuerdo con los <a href="legales.html" style="color: var(--pink)">terminos y condiciones</a>?
                    </label>
                    <div class="valid-feedback">
                    Buena elección
                  </div>
                  <div class="invalid-feedback">
                   Solo los que estan de acuerdo pueden pasar
                  </div>
                  </div>

                </div>

                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Enviar</button>
                </div>
              </form>
             </div>
             
            </div>
          </div>
        </div>
        </li>
       <li class="nav-item align-self-center ">
          <img src="img/bandera-espana.jpg" onclick="btnEspañol()" id="btnEspañol" class="idioma" width="40px" height="40px">
          <img src="img/bandera-uk.jpg" onclick="btnEnglish()" id="btnEnglish" class="idioma" width="40px" height="40px">
        </li>

        <li class="nav-item align-self-center p-4">
          <a href="carrito.html">
          <img src="img/cesto.png" width="40px" height="40px" style="cursor: pointer">
          <span class="position-absolute top-40 start-80 translate-middle badge rounded-pill bg-danger numerito" id="numerito">
          0
          </span></a>
        </li>


      </ul>
      
    </div>

  </div>


</nav>
  
  

  </div>
        `;
}
