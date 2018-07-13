function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*10)+1; //*10 significa multiplicar por el (numero maximo + el minimo), indica el numero maximo que se quiere obtener . El +1 le suma el minimo para que arranque desde 1
	alert(numero);

}//FIN DE LA FUNCIÓN