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
 	var lampara, descuento, cantidad, marca, preciodescuentofinal;
	marca=document.getElementById('Marca').value;
	cantidad=document.getElementById('Cantidad').value;
	
	/*Punto A*/
	if (cantidad>=6) {
		cantidad=(cantidad*35);
		descuento=cantidad*0.50;
		document.getElementById('precioDescuento').value=descuento;
	}

	/*Punto B*/
	if (cantidad==5 && marca=='ArgentinaLuz') {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.40);
		document.getElementById('precioDescuento').value=descuento;
	}
	else {
		if (cantidad==5) {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.30);
		document.getElementById('precioDescuento').value=descuento;
		}
	}
	/*Punto C*/
	if (cantidad==4 && (marca=='ArgentinaLuz' || marca=='FelipeLamparas')) {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.25);
		document.getElementById('precioDescuento').value=descuento;
	}
	else{
		if (cantidad==4) {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.20);
		document.getElementById('precioDescuento').value=descuento;
		}
	}
	/*Punto D*/
	if (cantidad==3 && marca=='ArgentinaLuz') {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.15);
		document.getElementById('precioDescuento').value=descuento;
	}
	if (cantidad==3 && marca=='FelipeLamparas') {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.10);
		document.getElementById('precioDescuento').value=descuento;
	}
	else{
		if (cantidad==3) {
		cantidad=(cantidad*35);
		descuento=(cantidad*0.5);
		document.getElementById('precioDescuento').value=descuento;
		}
	}

	preciodescuentofinal=document.getElementById('precioDescuento').value;
	if (preciodescuentofinal>=120) {
		ingresobruto=(ingresobruto*0.10);
		preciodescuentofinal=preciodescuentofinal+ingresobruto;
		alert("IIBB Usted pago ”+ preciodescuentofinal"+", siendo"+ingresobruto+" el impuesto que se pagó");
	}

}
