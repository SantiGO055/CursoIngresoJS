function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	numero=prompt('Ingrese numeros, para cortar escriba si');
	while(numero>0 ||numero<0 && (numero!='si'))
	{
		numero=parseInt(numero);
		if (numero>0){
			positivo=numero+positivo;
		}
		else{
			negativo=numero*negativo;
		}


		numero=prompt('Ingrese numeros, para cortar escriba si');
		contador++;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN