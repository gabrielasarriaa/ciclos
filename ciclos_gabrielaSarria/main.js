// //paso 1 hacer un inicio y declarar una variable
// let x = 1;
// //paso 2 se crea una condicion  que delimite el ciclo
// while (x <= 10) {
//     //intruccion que se repita
//     document.write( x + "<br>");
//     //paso 3
//     x = x + 1;
// }

/********************************************************/

// document.write( "<hr>ciclo for <br>");
// //   paso1     paso2     paso3
// for (let y=1 ; y <= 20 ; y=y+1 ) {

//     document.write( y + "<br>");
// }

/********************************************************/

//  var x = 10;
// while (x >= 1) {

//     document.write( x + "<br>");

//     x = x - 1;
// }
/*********************************************************/

// document.write( "<hr>ciclo for <br>");
// for (let y=20 ; y >= 1 ; y=y-1 ) {

//     document.write( y + "<br>");
// }

/********************************************************/

// asendente x=x+1    x++   x+=1  
// descendente x=x-1    x--   x-=1  

// for (let x=1 ;  x <= 15 ; x+=2 ) {

//         document.write( x + "<br>");
//     }

//     document.write( "<hr>ciclo for <br>");

// for (let x=15 ;  x >= 1 ; x-=3 ) {

//         document.write( x + "<br>");
//     }

/********************************************************/

// var inicio = Number(prompt("digite inicio del ciclo"));
// var fin= Number(prompt("digite final del ciclo"));
// var i = Number(prompt("digite intervalos del ciclo"));

// for (inicio ; inicio <= fin ; inicio+=i ){
//     document.write( inicio + "<br>");
// }

/*******************************************************/

// variables acumuladoras y variables contadoras

// let suma = 0;
// let conta = 0;
// let total = Number(prompt("¿Cuantos numero deseas digitar?"));
// for(let x = 1; x <= total; x++){
//     //instrucciones
//     let numeros = Number(prompt("Digite el numero #" +x));
//     document.write("#"+numeros+ ",");
//     suma = suma + numeros; //suma+=numeros
//     conta++;
// }
// document.write("<br> la suma de todos los numero es: "+suma);
// document.write("<br> el total de los numeros fueron: "+conta);

/********************************************************/

// // variables acumuladoras y variables contadoras
// let suma = 0;
// let conta = 0;
// let respuesta = prompt("¿Deseas digitar un numero? si/no");          //respuesta != "no"
// for(let x = 1; respuesta == "si"; x++){
//     //instrucciones
//     let numeros = Number(prompt("Digite el numero #" +x));
//     document.write("#"+numeros+ ",");
//     suma = suma + numeros; //suma+=numeros
//     conta++;
//     respuesta = prompt("¿Deseas digitar un numero? si/no");
// }
// document.write("<br> la suma de todos los numero es: "+suma);
// document.write("<br> el total de los numeros fueron: "+conta);

/**********************************************************/

// var nombre = prompt("Digite nombre del estudiante");
// var notas = Number(prompt("¿Cuantan notas vas a digitar?"));
// var sumanotas = 0;
// var promedio;
// for(var x =1; x <= notas; x++){
//     var calificacion = Number(prompt("Digite nota #"+x));
//     sumanotas+=calificacion;
// }
// promedio = sumanotas/notas;
// if (promedio >= 3) {
//     document.write("El estudiante: "+nombre+"<br>");
//     document.write("Aprobo con nota: "+promedio);
// }else{
//     document.write("El estudiante: "+nombre+"<br>");
//     document.write("Reprobo con nota: "+promedio);
// }

/**********************************************************/

//realice una tabla de multiplicar con cualquier número ingresado hasta el 30

// let num =Number(prompt("digite numero de la tabla que deseas"));
// let resulado =0;
// for (let x=0 ; x < 31 ; x+=1 ) {
//      resulado= x *  num; 
//     document.write( x+ " * " +num + " = "+resulado+ "<br>");
// }

/**********************************************************/
//Cree la tabla de multiplicar de cualquier número ingresado de manera descendente

// let num =Number(prompt("digite numero de la tabla que deseas"));
// let resulado =0;
// for (let x =30 ; x >= 1  ; x-=1 ) {
//      resulado= x *  num; 
//     document.write( num +  " * " + x + " = "+resulado+ "<br>");
// }

/**********************************************************/

//Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
// var i = Number(prompt("digite intervalos del ciclo"));
// inicio = 1;
// fin = 30;
// for (inicio ; inicio <= fin ; inicio+=i ){
//     document.write( inicio + "<br>");
// }

//Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.

/**********************************************************/

// var intervalos = Number(prompt("ingrese un numero"));
// for(var x = 30; x >= 1; x-=intervalos){
//     document.write(x + "<br>");
// }