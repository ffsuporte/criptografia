function descriptografia() {
	var input = document.getElementById("input-texto");
	var texto = input.value;

	var textoCripto = texto.split("");
	var textoDescripto = textoCripto.toString();

	textoDescripto = textoDescripto.replaceAll(",", "");
	var trocaLetras = textoDescripto.replaceAll("imes", "i");
	trocaLetras = trocaLetras.replaceAll("ober", "o");
	trocaLetras = trocaLetras.replaceAll("enter", "e");
	trocaLetras = trocaLetras.replaceAll("ai", "a");
	trocaLetras = trocaLetras.replaceAll("ufat", "u");
	trocaLetras = trocaLetras.replaceAll(",", "");

	// captura o input e mostra resultado nele
	event.preventDefault();
	var input2 = document.getElementById("msg");
	input2.value = trocaLetras;

	// add classList

	var textoinvisivel = document.getElementById("texto-invisivel");
	textoinvisivel.classList.add("invisivel");
}

document.getElementById("btn-descripto").onclick = descriptografia;