/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var descuento, cantidad, marca, ingresobruto, precio;
	marca=document.getElementById('Marca').value;
	cantidad=document.getElementById('Cantidad').value;
	precio=(cantidad*35);
	cantidad=parseInt(cantidad);

										//Ejercicio hecho con switch
	switch(cantidad)
	{
		case 1:
		case 2:
			break;
		case 3:
				switch(marca){
					case 'ArgentinaLuz':
						descuento=precio*0.15;
						descuento=precio-descuento;
						break;
					case 'FelipeLamparas':
						descuento=precio*0.10;
						descuento=precio-descuento;
						break;
					default:
						descuento=precio*0.05;
						descuento=precio-descuento;

						}
			break;
		case 4:
				switch(marca){
					case 'ArgentinaLuz':
					case 'FelipeLamparas':
						descuento=precio*0.25;
						descuento=precio-descuento;
						break;
					default:
						descuento=precio*0.20;
						descuento=precio-descuento;

					}
			break;
		case 5:
				switch(marca){
					case 'ArgentinaLuz':
						descuento=precio*0.40;
						descuento=precio-descuento;
						break;
					default:
						descuento=precio*0.30;
						descuento=precio-descuento;

					}
			break;
		default:
			descuento=precio*0.50;
			descuento=precio-descuento;

	}

	document.getElementById('precioDescuento').value=descuento;

	if (descuento>=120) {
		ingresobruto=(descuento*0.10);
		descuento=descuento+ingresobruto;
		alert("IIBB Usted pago "+ descuento + ", siendo "+ingresobruto+ " el impuesto que se pagó");
	}





										//Ejercicio hecho con if
/*
	//Punto A

	if (cantidad>=6) {
		descuento=precio*0.50;
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}

	//Punto B
	else if (cantidad==5 && marca=='ArgentinaLuz') {
		descuento=(precio*0.40);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}
	else if (cantidad==5){
		descuento=(precio*0.30);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
		}
	
	//Punto C
	else if (cantidad==4 && (marca=='ArgentinaLuz' || marca=='FelipeLamparas')) {
		descuento=(precio*0.25);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}
	else if(cantidad==4) {
		descuento=(precio*0.20);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
		}
	
	//Punto D
	else if (cantidad==3 && marca=='ArgentinaLuz') {
		descuento=(precio*0.15);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}
	else if (cantidad==3 && marca=='FelipeLamparas') {
		descuento=(precio*0.10);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}
	else if(cantidad==3) {
		descuento=(precio*0.05);
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
		}
	else if(cantidad<3){
		descuento=0;
		document.getElementById('precioDescuento').value=precio;
	}

	descuento=document.getElementById('precioDescuento').value;
	descuento=parseFloat(descuento);
	if (descuento>=120) {
		ingresobruto=(descuento*0.10);
		descuento=descuento+ingresobruto;
		alert("IIBB Usted pago "+ descuento + ", siendo "+ingresobruto+ " el impuesto que se pagó");
	}
*/
}
