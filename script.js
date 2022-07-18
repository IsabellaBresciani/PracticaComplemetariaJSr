/*1. Comparaciones: Escribí en tu consola estas expresiones teniendo en cuenta el valor que deben retornar:*/

//constantes (no van a variar en el resto del programa)
const numero = 5
const string = "5"
const string1 = "cinco"
const string2 = "CINCO"

console.log("Punto 1: ")

if ((string1 === string2.toLowerCase())){//javascript es case sensitive, utilizando .tolowercase() hago que ambos strings sean iguales
    console.log("true: Que compare 2 Strings y retorne un valor true")
}
if (string1 != string2){    //Al ser uno en mayusculas y otro en minusculas, entra y ejecuta el console.log
    console.log("false: Que compare 2 Strings y devuelva false.")
}

if (string !== numero){  //con el doble igual, comparo tambien por tipo de dato no solo por valor, y es por eso que entra al if. 
    console.log("false: Que involucre un String y un Número y retorne false.")
}
if (string == numero){  //con solo dos iguales no importta que sean distinto tipo de dato, solo que tengan el mismo valor.
    console.log("true: Que involucre un String y un Número y retorne true.")
}

/*2. Par O Impar
Pedile al usuario que ingrese un número 
para que tu programa evalúe si es par o impar. Usá la estructura condicional if…else.*/
console.log("Punto 2: ")
let numero01 = parseInt(prompt("Ingrese un numero: "))
let condi = true
while (condi){
    if(numero01 % 2 == 0){
        console.log(`${numero01} es par`)
        condi = false
    }else if(isNaN(numero01)) {
        console.log("el numero que ingreso es invalido,vuelva a intentarlo")
        condi = true
        numero01 = parseInt(prompt("Ingrese un numero: "))
    }else{
        console.log(`${numero01} es impar`)
        condi = false
    }
}

/* 3.Agregá Caminos

Teniendo en cuenta este código:





Si la edad es negativa, que se muestre en la consola este mensaje: “Error, su edad no es válida.” Importante: No se deberá mostrar ningún otro mensaje.
Si tiene 21 años, además de darle la bienvenida, felicitalo por haber llegado a la mayoría de edad.
Si su edad es impar decile en cualquiera de los mensajes: “¿Sabías que tu edad es impar?”.*/

console.log("Punto 3: ")
let edad = prompt("Ingrese su edad.")
let condiEdad
while (condiEdad){
    if (edad <= 0){
        alert("Error, su edad no es válida, vuelva a intentar")
        edad = prompt("Ingrese su edad.")
        console.log(edad)
    }else if(edad % 2 == 0){
        if(edad<18) {
            alert("No puede pasar al bar.")
        }else if(edad<21){
            alert("Puede pasar al bar, pero no puede tomar alcohol.")
        }else if(edad==21){ 
            alert("Puede pasar al bar y tomar alcohol. Felicitaciones por cumplir la mayoria de edad")
        }else if(edad>21){ 
            alert("Puede pasar al bar y tomar alcohol.")
        }
        condiEdad=false
    }else if(isNaN(edad)){
        alert("Error, su edad no es válida")
        edad = prompt("Ingrese su edad.")
    }else{
        alert("¿Sabías que tu edad es impar?")
        condiEdad=false
        if(edad<18) {
            alert("No puede pasar al bar.")
        }else if(edad<21){
            alert("Puede pasar al bar, pero no puede tomar alcohol.")
        }else if(edad>21){ 
            alert("Puede pasar al bar y tomar alcohol.")
        } 
    }
}

/* Adiviná El Número

Creá la Variable numeroSecreto. Ese número deberá ser igual a un entero.
Preguntale al usuario cuál es el número secreto.
Mostrale un mensaje que le indique al usuario si adivinó, o no, el número secreto.
Indicale al usuario si el número ingresado es mayor o menor que el número secreto */
console.log("Punto 4: ")
let numeroSecreto = 5

let numeroIntento = parseInt(prompt("Ingrese el numero secreto: "))

if(numeroSecreto == numeroIntento){
    console.log("Adivinaste el numero, felicitaciones")
}else if(isNaN(numeroIntento)){
    console.log("El numero que ingresaste es invalido")
}else{
    console.log("No adivinaste el numero: ")
    if (numeroSecreto > numeroIntento){
        console.log("El numero Secreto es aun mayor al que ingresaste")
    }
    else if (numeroSecreto < numeroIntento){
        console.log("El numero Secreto es aun menor al que ingresaste")
    }
}

