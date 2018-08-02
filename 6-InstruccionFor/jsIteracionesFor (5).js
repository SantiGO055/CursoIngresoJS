function mostrar()
{

	var contador;
	var numero;
	
	for (contador=1; ;contador++) {
		numero=prompt("Ingrese un numero");
		console.log("Numero de pedido "+contador);
		
		if (numero>=9) {
		break;
		}

	}
	console.log("Los pedidos totales fueron "+contador);


}//FIN DE LA FUNCIÓN