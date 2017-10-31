/*Solicitando un número de tarjeta*/
var cardNumber = prompt('Ingrese número de tarjeta:');

/*Pasando los caracteres a un nuevo array usando un reverso, para convertir
la cadena a número*/
var reverseArray = function(string) {
    /*Creamos un array vacio para agregar los caracteres invertidos*/
    var array = [];
    /*Utilizamos un for para que recorra los elemetos uno a uno*/
    for (var i = 0; i < string.length; i++) {
        /*Utilizamos unishift para agregar los elementos y regresar la longitud de
        nuestro array*/
        array.unshift(parseInt(string[i]));
    }
    /*Agregando 0 como elemento y utilizamos un splice para cambiar el contenido*/
    array.splice(0, 0, 0);
    /*Retornamos para que se imprima en pantalla*/
    return array;
}
/*Declaramos nuestra funcion isValidCard*/
var isValidCard = function(array) {
    /*Declaramos la variable sum para iniciar la suma*/
    var sum = 0;
    /*Utilizamos un for para revisar los elementos del array*/
    for (var i = 0; i < array.length; i++) {
        /* Utilizamos un if para identificar elementos de indice par*/
        if (i !== 0 && i % 2 === 0) {
            /* Despuesa obtenemos el doble del valor del elemento que esta en la
             posición i*/
            var value = array[i] * 2;
            /* Con un if identificamos los valores que sean menor a 10*/
            if (value < 10) {
                /* Se remplazan los nuevos valores en la misma posición y utilizamos un splice
                para cambiar este contenido y agregar nuevo*/
                array.splice(i, 1, value); // [ 1, 2, 6, 4, 5, 6, 7 ]
            }
            /*Identificamos ahora los valores que son mayores a 10*/
            if (value >= 10) {
                /*Convirtimos el valor a string para poder tomar los digitos*/
                var strValue = value.toString();
                /*Sumamos los valores de los digitos y usando un parseInt para comprobar
                los argumentosde*/
                var newNumber = parseInt(strValue[0]) + parseInt(strValue[1]);
                /*Reemplazamos los nuevos valores en la misma posición y creamos newNumber*/
                array.splice(i, 1, newNumber);
            }
        }
        /*Sumamos los elementos de la posición i*/
        sum += array[i];
    }
    /*Validando para mostrar mensaje esto a travez de un if*/
    if (sum % 10 === 0 && cardNumber !== "") {
        /*Creamos un alert que nos muestre la tarjeta de credito valida*/
        alert('Su tarjeta de crédito es válida');
        /*Utilizamos un else y usamos un alert para nuestra opcion de tarjeta
         invalida */
    } else {
        alert('Su tarjeta de crédito es inválida.\n.');
    }
}

isValidCard(reverseArray(cardNumber));
