/* ¿Puedo Jubilarme? 
Parte 1 -Crear un programa que le indique a las mujeres si están en edad, o no, de jubilarse.*/

let respuesta = prompt("Quiere saber si se puede jubilar? si/no ")

while(respuesta === "si"){
    let edad=parseInt(prompt("Ingrese su edad: "))
    let sexo=prompt("Ingrese su sexo m/f ")
    switch(sexo){
        case "f":
            if(isNaN(edad)){
                console.log("Usted ingreso una edad invalida")
            }else if(edad<=0){
                console.log("Usted ingreso una edad incorrecta")
            }else if (edad>=60){
                console.log("Puede Jubilarse")
            }else if(edad<60){
                console.log("No Puede Jubilarse")
            }
        break;
        case "m":
            if(isNaN(edad)){
                console.log("Usted ingreso una edad invalida")
            }else if(edad<=0){
                console.log("Usted ingreso una edad incorrecta")
            }else if (edad>=65){
                console.log("Puede Jubilarse")
            }else if(edad<65){
                console.log("No Puede Jubilarse")
            }
        break;
        default:
            console.log("Ingreso una edad incorrecta")
        break;
    }
    respuesta = prompt("Quiere saber si se puede jubilar? si/no ")
    
}
/* Usando la estructura switch creá un programa en el que, si un usuario ingresa “casa”,
 “perro”, “pelota”, “árbol” o “genio”, nos devuelva la misma palabra traducida al idioma inglés.*/
 
let variable = prompt("Ingrese “casa”, “perro”, “pelota”, “árbol” o “genio”")

switch(variable.toLowerCase()){
    case "casa":
        console.log("home")
    break;
    case "perro":
        console.log("dog")
    break;
    case "pelota":
        console.log("ball")
    break;
    case "arbol":
        console.log("tree")
    break;
    case "genio":
        console.log("genius")
    break;
    default:
        console.log("la palabra ingresada es ivalida")
    break;
}
/* Ciclos

FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir “Fizz” en vez del número.

Si es múltiplo de 5, deberá imprimir “Buzz”.

Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir “FizzBuzz”.*/

let i

for (i=1; i<101;i++){
    if(i % 3 == 0 && i % 5==0 ){
        console.log(i + "FizzBuzz")
    }else if(i % 3==0){
        console.log(i + "Fizz")
    }else if(i % 5==0){
        console.log(i + "Buzz")
    }
}

/*Escribí Loops*/

console.log("Todos los números entre -10 y 19.")
for (i=-10; i<=19;i++){
    console.log(i)
}
console.log("Todos los números pares entre 10 y 40")
for (i=10; i<=40;i+=2){
    console.log(i)
}
console.log("Todos los números impares entre 300 y 333")

for (i=301; i<=333;i+=2){
    console.log(i)
}
console.log("Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo")
for (i=5; i<51;i++){
    if(i % 3 == 0 && i % 5==0 ){
        console.log(i)
    }
}
/*En este ejercicio deberás crear un 
programa que ayude al Burro a preguntar al usuario “¿Ya merito llegamos?”

Si el usuario responde “Si”, el programa deberá darle un mensaje de
 bienvenida a Muy Muy Lejano. Sino, deberá mostrarle, nuevamente, el mensaje del Burro.

Importante: El programa deberá identificar como verdadero tanto “Si”, como “SI”, 
como “si”. Por eso siempre es importante usar el método .toLowerCase()*/

let respuesta01 = prompt("¿Ya merito llegamos?").toLowerCase()

while(respuesta01 !== "si"){
    respuesta01 = prompt("¿Ya merito llegamos?").toLowerCase()
}
console.log("bienvenida a Muy Muy Lejano")