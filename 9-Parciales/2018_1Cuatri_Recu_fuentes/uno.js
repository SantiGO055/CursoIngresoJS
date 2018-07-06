
function mostrar()
{
	var base, altura, perimetro, area;
	base=prompt("Ingrese la base de un triangulo");
	altura=prompt("Ingrese la altura de un triangulo");
	base=parseInt(base);
	altura=parseInt(altura);
	
	area=(base*altura)/2;
	perimetro=(base*base)+(altura*altura);
	perimetro=Math.sqrt(perimetro);
	perimetro=parseFloat(perimetro);
	alert("La superficie del triangulo es "+area+" y el perimetro del triangulo es "+perimetro);
	
}
