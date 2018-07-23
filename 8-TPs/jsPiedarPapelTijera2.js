var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
		var eleccionMaquina;
	 	eleccionMaquina=Math.floor(Math.random() * 3) + 1;
}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;
	var papel=2;
	var tijera=3;
	if (eleccionMaquina==piedra){
		ContadorDeEmpates++;
		alert("Empató");
	}
	else if (eleccionMaquina==papel){
		ContadorDeGanadas++;
		alert("Gano");
	}
	else {
		ContadorDePerdidas++;
		alert("Perdio");
	}
	function mostrarResultado();
	function comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
	var piedra=1;
	var papel=2;
	var tijera=3;
	if (eleccionMaquina==papel){
		ContadorDeEmpates++;
		alert("Empató");
	}
	else if (eleccionMaquina==tijera){
		ContadorDeGanadas++;
		alert("Gano");
	}
	else {
		ContadorDePerdidas++;
		alert("Perdio");
	}


	function mostrarResultado();
	function comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
	var piedra=1;
	var papel=2;
	var tijera=3;
	if (eleccionMaquina==tijera){
		ContadorDeEmpates++;
		alert("Empató");
	}
	else if (eleccionMaquina==piedra){
		ContadorDeGanadas++;
		alert("Gano");
	}
	else {
		ContadorDePerdidas++;
		alert("Perdio");
	}


	function mostrarResultado();
	function comenzar();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
	
}