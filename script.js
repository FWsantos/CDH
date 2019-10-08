/*

Script para configuração do slide da Celula de Desenvolvimento Hetero

*/

let indice = 0;
let n = 6;
let slides = [];

function next() { // Vai para o proximo slide
	document.getElementById("slide_"+indice).setAttribute('style', "visibility: hidden")
	indice = indice + 1;
	loading_slide();
}

function before() { // Vai para o slide anterior
	document.getElementById("slide_"+indice).setAttribute('style', "visibility: hidden")
	indice = indice - 1;	
	loading_slide();
}

function loading_slide(){
	let pagina_atual = document.getElementById('slide');
	pagina_atual.innerHTML = indice;
	
	// console.log("slide_1"+indice);
	let texto_atual = document.getElementById("slide_"+indice);

	texto_atual.setAttribute('style', "visibility: visible");
	// texto_atual.set
}