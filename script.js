/*

Script para configuração do slide da Celula de Desenvolvimento Hetero

*/

let indice = 0;
let n = 6; // Número de Slides
let slides = [];

function next() { // Vai para o proximo slide
	if (indice < n) {
		indice = indice + 1;
		loading_slide();
	}
}

function before() { // Vai para o slide anterior
	if(indice > 0){
		indice = indice - 1;	
		loading_slide();
	}
}

function loading_slide(){ // carrega o conteudo atual
	let pagina_atual = document.getElementById('indice');
	pagina_atual.innerHTML = indice;
	
	let texto_atual = document.getElementById("slide_"+indice);
	let front = document.getElementById('front');

	front.innerHTML = texto_atual.innerHTML;



}