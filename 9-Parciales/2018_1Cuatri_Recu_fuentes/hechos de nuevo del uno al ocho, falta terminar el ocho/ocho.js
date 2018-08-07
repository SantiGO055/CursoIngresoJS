function mostrar()
{
	var libros=0;
	var nombre;
	var cantPag;
	var ventas;
	var tema;
	var contadorDatos=0;
	var librosPagPares=0;
	var librosPagImpares=0;
	var ventasCero=0;
	var cantVentas=0;
	var promedio;
	var acumuladorVentas=0;
	var paginasProgram=0;
	respuesta='si'

	while(respuesta!='no'){

		while(contadorDatos<2){
			nombre=prompt("Ingrese nombre del libro");
			cantPag=prompt("Ingrese la cantidad de paginas del libro");
			cantPag=parseInt(cantPag);
			ventas=prompt("Ingrese la cantidad de ventas del libro");
			ventas=parseInt(ventas);
			cantVentas+=ventas;
			acumuladorVentas++;
			while(ventas<0){
				ventas=prompt("Ingrese la cantidad de ventas del libro");
				ventas=parseInt(ventas);
				cantVentas+=ventas;
				acumuladorVentas++;
				}

			tema=prompt("Ingrese el tema del libro");
			while(tema!='robotica'&&tema!='programacion'&&tema!='patrones'&&tema!='base de datos'){
				tema=prompt("Ingrese el tema del libro");
				}
			if (tema=='programacion') {
				paginasProgram+=cantPag;
			}


		contadorDatos++;

		}
		if (cantPag%2==0) {
			librosPagPares++;
		}
		else{
			librosPagImpares++;
		}
		if (ventas==0) {
			ventasCero++;
		}
		promedio=cantVentas/acumuladorVentas;




	respuesta=prompt("Quiere continuar? SI o NO");
	}
	document.write("La cantidad de libros con paginas pares es de "+librosPagPares+"<br>");
	document.write("La cantidad de libros con paginas impares es de "+librosPagImpares+"<br>");
	document.write("La cantidad de veces que hubo cero ventas fue de "+ventasCero+"<br>");
	document.write("El promedio de las ventas es de "+promedio+"<br>");
	document.write("La suma de las paginas de los libros de programacion es "+paginasProgram+"<br>");
}
