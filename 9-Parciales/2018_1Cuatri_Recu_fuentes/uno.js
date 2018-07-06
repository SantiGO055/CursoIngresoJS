
function mostrar()
{
	var base, altura, perimetro, superficie;
	base=prompt("Ingrese la base de un triangulo");
	altura=prompt("Ingrese la altura de un triangulo");
	
	superficie=(base*altura)/2;
	perimetro=(base*base)+(altura*altura);
	perimetro=Math.sqrt(perimetro);
	alert("La superficie del triangulo es :"+superficie+" y el perimetro del triangulo es"+perimetro);
	
}
