optener_localStoragedos();


function btnEspañol() {
  let textEs = document.getElementById("btnEspañol");
  localStorage.setItem("textEs", textEs );
  console.log(5);
  optener_localStorage();
  
}


function btnEnglish() {
  let textEn = document.getElementById("btnEnglish");
  localStorage.setItem("textEn", textEn );
  console.log(6);
  optener_localStoragedos();

}

function btnEspañolSp() {
  let textEs = document.getElementById("btnEspañol");
  localStorage.setItem("textEs", textEs );
  console.log(67);
  optener_localStorage();
  
}


function btnEnglishSp() {
  let textEn = document.getElementById("btnEnglish");
  localStorage.setItem("textEn", textEn );
  console.log(68);
  optener_localStoragedos();
  
}






// cuando tenemos en el localstore la id de nombre este cambia de color a rojo
function optener_localStorage() {
  let textEs = localStorage.getItem("textEs");
  
  

  if (localStorage.getItem("textEs")) {
  document.getElementById("btnEnglish").style.display = "block";
  document.getElementById("txEn1").style.display = "block";
  document.getElementById("txEn2").style.display = "block";
  document.getElementById("txEn3").style.display = "block";
  document.getElementById("txEn4").style.display = "block";
  document.getElementById("txEn5").style.display = "block";
  document.getElementById("txEn6").style.display = "block";
  

  document.getElementById("txEs1").style.display = "none";
  document.getElementById("txEs2").style.display = "none";
  document.getElementById("txEs3").style.display = "none";
  document.getElementById("txEs4").style.display = "none";
  document.getElementById("txEs5").style.display = "none";
  document.getElementById("txEs6").style.display = "none";
  
  document.getElementById("btnEspañol").style.display = "none";
  
  localStorage.removeItem('textEn');
    console.log(1);
  }
  else{
  localStorage.getItem("textEn")
  optener_localStoragedos();
    console.log(0);
  }
}

function optener_localStoragedos() {
  let textEn = localStorage.getItem("textEn");
  
  

  if (localStorage.getItem("textEn")) {
  document.getElementById("btnEnglish").style.display = "none";
  document.getElementById("txEn1").style.display = "none";
  document.getElementById("txEn2").style.display = "none";
  document.getElementById("txEn3").style.display = "none";
  document.getElementById("txEn4").style.display = "none";
  document.getElementById("txEn5").style.display = "none";
  document.getElementById("txEn6").style.display = "none";


  document.getElementById("txEs1").style.display = "block";
  document.getElementById("txEs2").style.display = "block";
  document.getElementById("txEs3").style.display = "block";
  document.getElementById("txEs4").style.display = "block";
  document.getElementById("txEs5").style.display = "block";
  document.getElementById("txEs6").style.display = "block";

  document.getElementById("btnEspañol").style.display = "block";
  
  localStorage.removeItem('textEs');
    console.log(3);
  }
  else{
  localStorage.getItem("textEs")
  optener_localStorage();
    console.log(4);
  }
}






