function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;
	base=prompt("Ingrese la base de un triangulo equilatero");
	base=parseInt(base);
	altura=prompt("Ingrese la altura de un triangulo equilatero");
	altura=parseInt(altura);
	superficie=(base*altura)/2;
	perimetro=(base*3);
	alert("La superficie del triangulo es "+superficie+" y el perimetro del triangulo es "+perimetro);

	
}
