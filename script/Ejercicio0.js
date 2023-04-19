
let cantidad, descuento=0, monto, totalPagar;

//Leer o asignar información
cantidad = Number(prompt('Ingrese cantidad'))

//Proceso
monto = cantidad * 2000000;
console.log(monto)

if (cantidad < 10) {
    alert('No tiene descuento')
} else if (cantidad > 10 && cantidad < 20) {
    descuento = monto * 0.1
}else if (cantidad >= 20 && cantidad < 30){
    descuento = monto * 0.2
}else if (cantidad >= 30){
    descuento = monto * 0.4
}

totalPagar = monto - descuento;
alert('El total a pagar es'+ totalPagar)