
function criptografia(){

	// pega o texto digitado
	var input = document.getElementById("input-texto");
	var texto = "";
	texto = input.value;
	var cxTexto = texto.toLowerCase();

	// coloca cada letra do texto em indice de array

	var textoSplit = cxTexto.split("");
	var textoCripto = textoSplit.toString();

	console.log(textoCripto);
	console.log(textoSplit);

	// logica da criptografia

	var trocaLetras = textoCripto.replaceAll("e", "enter");
	trocaLetras = trocaLetras.replaceAll("i", "imes");
	trocaLetras = trocaLetras.replaceAll("a", "ai");
	trocaLetras = trocaLetras.replaceAll("o", "ober");
	trocaLetras = trocaLetras.replaceAll("u", "ufat");
	trocaLetras = trocaLetras.replaceAll(",", "");

	console.log(trocaLetras);

	// captura o input  e mostra o resultado nele
	event.preventDefault();
	var input2 = document.getElementById("msg");
	input2.value = trocaLetras;

	/*// botao copiar

	document.getElementById("btn-copy").addEventListener("click", function() {
		document.getElementById("msg").select();
		document.execCommand("copy");
	});*/

}


document.getElementById("btn-cripto").onclick = criptografia;