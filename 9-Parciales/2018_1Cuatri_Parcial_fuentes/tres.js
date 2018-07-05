function mostrar()
{
	var precio, descuento, preciofinal;
	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");
	precio=parseInt(precio);
	descuento=parseInt(descuento);
	preciofinal=(precio*descuento)/100;
	preciofinal=(precio+preciofinal);
	document.getElementById('elPrecioFinal').value=preciofinal;
}
