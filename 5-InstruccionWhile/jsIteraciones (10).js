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


		respuesta=prompt('¿Quiere continuar?');
		contador++;
	}
	alert("La suma de los positivos es "+positivos);
	alert("La suma de los negativos es "+negativos);
	alert("La cantidad de positivos es de "+cantpositivos);
	alert("La cantidad de negativos es de "+cantnegativos);
	alert("La cantidad de ceros es de "+cantceros);
	//punto 7
	alert("El promedio de los positivos es "+positivos/cantpositivos);
	//punto 8
	alert("El promedio de los positivos es "+negativos/cantnegativos);
	//punto 9
	diferencia=positivos-negativos;
	alert("La diferencia entre positivos y negativos es "+diferencia);


}//FIN DE LA FUNCIÓN