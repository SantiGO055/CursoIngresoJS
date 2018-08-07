function mostrar()
{
	var precio;
	var descuento;
	var porcentajeDescuento;
	var precioConDescuento;
	var iva=21;
	var precioFinal;
	precio=prompt("Ingrese el precio del producto");
	precio=parseInt(precio);
	descuento=prompt("Ingrese el porcentaje de descuento a realizar");
	porcentajeDescuento=parseInt(descuento);
	descuento=(precio*descuento)/100;
	precioConDescuento=precio-descuento;

	alert("El descuento es de "+descuento+" el precio con descuento es "+precioConDescuento+" el iva es "+iva+"%");

	precioFinal=((precioConDescuento*iva)/100)+precioConDescuento;
	document.getElementById('elPrecioFinal').value=precioFinal;
}
