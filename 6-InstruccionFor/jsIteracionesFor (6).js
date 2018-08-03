function mostrar()
{

	var contador;
	var numero;
	var acumuladorPares=0;
	numero=prompt("Ingrese un numero");
	for (contador=1; contador<=numero;contador++) {
		
		
		if (contador%2==0) {

		acumuladorPares++;
		console.log("Los numeros pares que hay en "+numero+" son "+contador);
		}
		
	}
	console.log("La cantidad de numeros pares es "+acumuladorPares);



}//FIN DE LA FUNCIÓN