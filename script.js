let checar = function() {
	let nome = document.getElementById('nome').value;
	// alert(nome);
	let senha = document.querySelector("#senha");
	if (nome == "") {
		senha.setAttribute('disabled', '');
	}else{
		senha.removeAttribute('disabled');
	}
	// alert(senha);

}