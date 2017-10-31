//Declaramos la funcion decipher
var decipher = function(array) {
    //Declaramos la variable number
    var number = [];
    /* Utilizamos un for para extraer nuestros caracteres y charCodeAt para
    obetener el numero asignado al valor*/
    for (var i = 0; i < array[0].length; i++) {
        number.push(array[0].charCodeAt(i));
    }
    /*Creamos la variable letter en la que se almacenara el resultado de
     la formula aplicada 95 mayuscula 97 minuscula para el decifrado*/
    var letter = [];
    for (var j = 0; j < number.length; j++) {
        if (number[j] <= 90) {
            letter.push((number[j] + 65 + 33) % 26 + 65);
        } else {
            letter.push((number[j] + 97 + 33) % 26 + 97);
        }
    }
    /*Convertiremos los numeros obtenidos en letras para luego juntarlas, utilizamos
    .fromCharCode y utilizamos la variable newChipher para almacenar el resultado
    y utilizamos join para unir los elementos y hacer una cadena.*/
    var decipherLetter = [];

    for (var m = 0; m < letter.length; m++) {
        decipherLetter.push(String.fromCharCode(letter[m]));
        var newCipher = [decipherLetter.join("")];
    }
    //Utilizamos Return para retornar el resultado sin usar un console.log
    return newCipher;
};
/*Creamos la variable options y usamos un prompt para dar las opciones de
cifrado y desifrado*/
var options = [prompt("Elija una opcion " + "1. Cifrar " + "2. Decifrar")];
/*Creamos la variable sentence y utilizamos un for para que se ingrese la
frace que se desea cifrar o desifrar*/
var sentence = [prompt("Ingrese su frase")];
var obj = {
    " MESSAGE": sentence,
    "ENCODED MESSAGE": decipher(sentence)
};
if (options === ["1"]) {
    decipher(sentence);
}
//verificar que se imprima en consola
//console.log(decipher(sentence, (33)));
/* Creamos la funcion cipher*/
var cipher = function(array) {
    //Declaramos la variable number
    var number = [];
    /* Utilizamos un for para extraer nuestros caracteres y charCodeAt para
    obetener el numero asignado al valor*/
    for (var i = 0; i < array[0].length; i++) {
        number.push(array[0].charCodeAt(i));
    }
    /*Creamos la variable letter en la que se almacenara el resultado de
     la formula aplicada 95 mayuscula 97 minuscula para el cifrado*/
    var letter = [];
    for (var j = 0; j < number.length; j++) {
        if (number[j] <= 90) {
            letter.push((number[j] + 65 - 33) % 26 + 65);
        } else {
            letter.push((number[j] + 97 - 33) % 26 + 97);
        }
    }
    /*Convertiremos los numeros obtenidos en letras para luego juntarlas, utilizamos
    .fromCharCode y utilizamos la variable newChipher para almacenar el resultado
    y utilizamos join para unir los elementos y hacer una cadena.*/
    var cipherLetter = [];

    for (var m = 0; m < letter.length; m++) {
        cipherLetter.push(String.fromCharCode(letter[m]));
        var newCipher = [cipherLetter.join("")];
    }
    //Utilizamos Return para retornar el resultado sin usar un console.log
    return newCipher;
};

//console.log(cipher(sentence, (33)));
