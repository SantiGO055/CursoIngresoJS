function mostrar()
{

	var contador=0;
	var numero;
	var respuesta='si'
	// declarar variables
	
	
	while(respuesta!='no')
	{
		numero=prompt('Ingrese un numero #'+contador);
		numero=parseInt(numero);

		if (contador==0) {
			maximo=numero;
			minimo=numero;
		}
		else{
			if (numero>maximo) {
				maximo=numero;
			}
			if(numero<minimo){
				minimo=numero;
			}
		}





		respuesta=prompt('Quiere continuar? Ingrese si o no');
		contador++;
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN