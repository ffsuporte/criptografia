function copia() {

	// botao copiar
	document.getElementById("btn-copy");
    document.getElementById("msg").select();
	document.execCommand("copy");

	var input = document.getElementById("input-texto");
	input.value = " ";
	
	var textoinvisivel = document.getElementById("texto-invisivel");
	textoinvisivel.classList.remove("invisivel");

}

document.getElementById("btn-copy").onclick = copia;