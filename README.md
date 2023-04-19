# Estructuras-selectivas-
Ejercicios condicionales

//Recuerda visitar jairogaleas.com la academia cursos.jairogaleas.com
Algoritmo DescuentoCompras
	// Hacer un pseudocodigo de un programa para una tienda de electronica que tiene una promoción de descuento por ventas al mayor, 
	// el descuento dependerá del número de Telefonos que se compren. 
	// Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
	// si el número de Telefonos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y 
	// si son más treinta Telefonos se otorgará un 40% de descuento. El precio de cada Telefonos es de $200.
	
	//Declaracion de variables
	Definir cantidad como entero;
	Definir  descuento, monto, totalPagar como real;
	
	//Entrada
	Escribir "Ingrese los datos de la compra ";
	Escribir "Telefonos comprados: ";
	leer cantidad;
		
	//Proceso
	monto = cantidad * 200;
	//Salida
	si cantidad < 10 entonces
		Escribir "El monto total a pagar es : ", monto;
	FinSi
	si cantidad > 10 y cantidad < 20 Entonces
		descuento = monto * 0.10;
		totalPagar = monto - descuento;
		Escribir " Total : ", monto;
		Escribir " Descuento 10% :", descuento;
		Escribir " Total a Pagar : ", totalPagar;
	FinSi
	si cantidad > 20 y cantidad < 30 Entonces
		descuento = monto * 0.20;
		totalPagar = monto - descuento;
		Escribir " Total : ", monto;
		Escribir " Descuento 20% :", descuento;
		Escribir " Total a Pagar : ", totalPagar;
	FinSi
	si cantidad > 30 Entonces
		descuento = monto * 0.40;
		totalPagar = monto - descuento;
		Escribir " Total : ", monto;
		Escribir " Descuento 40% :", descuento;
		Escribir " Total a Pagar : ", totalPagar;
	FinSi
	
FinAlgoritmo
