function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var negativos=0;
	var positivos=0;
	var pares;
	var numero;
	var cantpositivos=0;
	var cantnegativos=0;
	var cantceros=0;
	var pares=0;
	var impares=0;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt('Ingrese un numero');
		numero=parseInt(numero);
		//punto 2
		if (numero>0){
			positivos=numero+positivos;
			//punto 3
			cantpositivos++;
		}
		//punto 1
		else if (numero<0) {
			negativos=numero+negativos;
			//punto 4
			cantnegativos++;
		}
		//punto 5
		else {
			cantceros++;
		}
		//punto 6
		if (numero%2==0) {
				pares++;
		}
		else{
			impares++;
		}

		respuesta=prompt('¿Quiere continuar? Si o No');
		contador++;
	}
	if (cantpositivos>cantnegativos){
		diferencia=cantpositivos-cantnegativos;

	}

	document.write("La suma de los positivos es "+positivos+"<br>");
	document.write("La suma de los negativos es "+negativos+"<br>");
	document.write("La cantidad de positivos es de "+cantpositivos+"<br>");
	document.write("La cantidad de negativos es de "+cantnegativos+"<br>");
	document.write("La cantidad de ceros es de "+cantceros+"<br>");
	//punto 7
	document.write("El promedio de los positivos es "+positivos/cantpositivos+"<br>");
	//punto 8
	document.write("El promedio de los positivos es "+negativos/cantnegativos+"<br>");
	//punto 9
	document.write("Hay "+diferencia+" mas positivos que negativos"+"<br>");


}//FIN DE LA FUNCIÓN