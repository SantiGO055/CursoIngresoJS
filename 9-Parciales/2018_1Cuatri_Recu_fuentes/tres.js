function mostrar()
{
	var precio
	var descuento
	var preciocondescuento
	var iva;
	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=(precio*descuento)/100;
	preciocondescuento=(precio-descuento);
	iva=(precio*21)/100;
	iva=preciocondescuento+iva;
	alert("El descuento es de "+descuento+" el precio con descuento es de "+preciocondescuento+" el precio con iva es de "+iva);
	preciofinal=preciocondescuento+iva;
	document.getElementById('elPrecioFinal').value=preciofinal;
}
