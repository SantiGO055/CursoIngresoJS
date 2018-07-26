function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	numero=prompt('Ingrese numeros, para cortar escriba si');
	while(numero>0 && numero!='si')
	{

		
		numero=parseInt(numero);
		acumulador=numero+acumulador;
		numero=prompt('Ingrese numeros, para cortar escriba si');
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN