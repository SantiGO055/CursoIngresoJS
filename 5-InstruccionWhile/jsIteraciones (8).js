function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	respuesta='si';
	while(respuesta!='no')
	{
		numero=prompt('Ingrese numeros');
		numero=parseInt(numero);
		if (numero>0){
			positivo=numero+positivo;
		}
		else{
			negativo=numero*negativo;
		}


		respuesta=prompt('¿Quiere continuar? Si o No');
		contador++;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN