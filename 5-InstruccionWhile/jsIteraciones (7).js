function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	while(respuesta!='no')
	{
		numero=prompt('Ingrese numeros');
		numero=parseInt(numero);
		acumulador=numero+acumulador;
		respuesta=prompt('¿Quiere continuar? Si o No');
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN