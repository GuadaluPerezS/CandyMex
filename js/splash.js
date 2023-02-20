


const splashScreen = document.querySelector(".splash");
const splashGray = document.querySelector(".splash-gray");
const idiomaEs = document.querySelector(".idiomaEs");
const idiomaUk = document.querySelector(".idiomaUk");

idiomaEs.addEventListener("click",()=>{

	splashScreen.style.opacity = 0;

	setTimeout(()=>{
		splashScreen.classList.add("hidden")
		splashGray.classList.add("hidden")
	},610)
	
	
})

idiomaUk.addEventListener("click",()=>{
	splashScreen.style.opacity = 0;
	
	setTimeout(()=>{
		splashScreen.classList.add("hidden")
		splashGray.classList.add("hidden")
	},610)

})