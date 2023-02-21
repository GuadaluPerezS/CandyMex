
const activeSep = document.getElementById("sep")
const septiembre = document.getElementById("septiembre")
const activeOct = document.getElementById("oct")
const octubre = document.getElementById("octubre")
const activeNov = document.getElementById("nov")
const noviembre = document.getElementById("noviembre")


const toggleseptiembre = () => {

	activeSep.style.display = "block"
	noviembre.style.background = "#D1434F"
	noviembre.style.color = "#EDEEF2"
	septiembre.style.background = "#E0949B"
	septiembre.style.color = "#EDEEF2"
	octubre.style.background = "#D1434F"
	octubre.style.color = "#EDEEF2"
	
	activeOct.style.display = "none"
	activeNov.style.display = "none"
}

septiembre.addEventListener("click", toggleseptiembre)


const toggleoctubre = () => {

	activeOct.style.display = "block"
	noviembre.style.background = "#D1434F"
	noviembre.style.color = "#EDEEF2"
	octubre.style.background = "#E0949B"
	octubre.style.color = "#EDEEF2"
	septiembre.style.background = "#D1434F"
	septiembre.style.color = "#EDEEF2"
	
	activeSep.style.display = "none"
	activeNov.style.display = "none"
}

octubre.addEventListener("click", toggleoctubre)

const togglenoviembre = () => {

	activeNov.style.display = "block"
	noviembre.style.background = "#E0949B"
	noviembre.style.color = "#EDEEF2"
	octubre.style.background = "#D1434F"
	octubre.style.color = "#EDEEF2"
	septiembre.style.background = "#D1434F"
	septiembre.style.color = "#EDEEF2"
	
	activeSep.style.display = "none"
	activeOct.style.display = "none"
}

noviembre.addEventListener("click", togglenoviembre)