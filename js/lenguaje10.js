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
   document.getElementById("txEn7").style.display = "block";
   document.getElementById("txEn8").style.display = "block";
   document.getElementById("txEn9").style.display = "block";
   document.getElementById("txEn10").style.display = "block";
  

  document.getElementById("txEs1").style.display = "none";
  document.getElementById("txEs2").style.display = "none";
  document.getElementById("txEs3").style.display = "none";
  document.getElementById("txEs4").style.display = "none";
  document.getElementById("txEs5").style.display = "none";
  document.getElementById("txEs6").style.display = "none";
  document.getElementById("txEs7").style.display = "none";
  document.getElementById("txEs8").style.display = "none";
  document.getElementById("txEs9").style.display = "none";
  document.getElementById("txEs10").style.display = "none";
  
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
  document.getElementById("txEn7").style.display = "none";
  document.getElementById("txEn8").style.display = "none";
  document.getElementById("txEn9").style.display = "none";
  document.getElementById("txEn10").style.display = "none";


  document.getElementById("txEs1").style.display = "block";
  document.getElementById("txEs2").style.display = "block";
  document.getElementById("txEs3").style.display = "block";
  document.getElementById("txEs4").style.display = "block";
  document.getElementById("txEs5").style.display = "block";
  document.getElementById("txEs6").style.display = "block";
   document.getElementById("txEs7").style.display = "block";
   document.getElementById("txEs8").style.display = "block";
   document.getElementById("txEs9").style.display = "block";
   document.getElementById("txEs10").style.display = "block";

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






