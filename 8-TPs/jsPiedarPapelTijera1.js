/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	var eleccionMaquina;
	eleccionMaquina=Math.floor(Math.random() * 3) + 1;


}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;
	var papel=2;
	var tijera=3;
	if (eleccionMaquina==piedra){
		alert("Empató");
	}
	else if(eleccionMaquina==papel){
		
	}

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN