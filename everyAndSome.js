/*
Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.
*/

let pelisFavoritas = ['Batman', 'IntensaMente2', 'Deadpool and Wolwerine']
console.log(pelisFavoritas)

/*
Accede y muestra en la consola el segundo elemento del array pelisFavoritas.
*/

console.log(pelisFavoritas[1])

/*
Declara un array vacío llamado libros y agrega tres elementos.
*/

let libros = []
libros.push('El señor de los anillos', 'Harry Potter', 'It')
console.log(libros)

/*
Elimina el último elemento del array libros y muéstralo en la consola.
*/

console.log(libros.pop())

/*
Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.
*/

let colores = ['Rojo', 'Blanco', 'Violeta', 'Rosa']
console.log(colores.length)

/*
Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
*/

colores.unshift('Negro', 'Lila')
console.log(colores)

/*
Elimina el primer elemento del array colores y muéstralo en la consola.
*/

console.log(colores.shift())

/*
Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
*/

let frutas = ['Banana', 'Manzana', 'Kiwi']
console.log(frutas.includes('Manzana'))

/*
Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let message1 = numeros.find(function(num){
	return num > 3
})
console.log(message1)
/*
Encuentra todos los números menores que 4 en el array numeros.
*/

let message2 = numeros.filter(function(num){
	return num < 4
})
console.log(message2)
/*
Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.
*/

function addElement(array, element){
	array.push(element)
	return array.length
}
console.log(addElement(numeros, 44))
/*
Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.
*/

function deleteFirstElement(array) {
	let deleted = array.shift()
	return deleted
}
console.log(deleteFirstElement(libros))
/*
Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como este “La longitud de mi array es de [longitud]”.
*/

function arrayLength(array){
	return `La longitud de mi array es de ${array.length}`
}
console.log(arrayLength(colores))
/*
Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.
*/

function verifyElement(array, element){
	let exists = array.includes(element)
	return exists
}
console.log(verifyElement(numeros, 44))

/*
Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
*/

function findElements(array, element){
	let founded = array.find(function(equal){
		return equal === element
	})
	return founded
}
console.log(findElements(libros, 'FNAF'))

/*
Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.
*/

function filterArray(array, number){
	let newArray = array.filter(function(greaters){
		return greaters > number
	})
	return newArray
}
console.log(filterArray(numeros, 12))

/*
EJERCICIOS EVERY O SOME

Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
*/

let numbers = [13, 21, 7, 37, 11, 44, 1, -1000]
let greaterThanZero = numbers.every(function(num){
	return num > 0
})
console.log(`Todos los numeros son mayores a 0: ${greaterThanZero}`)

/*
Validar que todos los strings son no vacíos
*/

let strings = ['aaa', 'ñ', 'qoewqew', 'asadasd', '~~~', '', '~~~~']
let noEmptyStrings = strings.every(function(str){
	return str.length > 0
})
console.log(`No hay strings vacios: ${noEmptyStrings}`)

/*
Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado
*/

strings = ['aaa', 'ñ', 'qoewqew', 'asadasd', '~~~', '~~~~'];
let everyStringHasSmt = strings.every(function(str){
    return str !== '';
});

console.log(`Todos los elementos contienen algun caracter: ${everyStringHasSmt}`);

/*
Confirmar que todos los estudiantes pasaron el examen:
*/

let students = [4, 10, 9, 7, 4, 5, 7, 1, 8, 6, 3, 2, 5, 4, 10]
let everyonePassed = students.every(function(student){
	return student >= 4
})
console.log(`Todos los estudiantes pasaron: ${everyonePassed}`)

/*
Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado.
*/

students = [6,7,8,9,10]
let everyoneHigherSix = students.every(function(student){
	return student >= 6
})
console.log(`Todos sacaron nota mayor a 6: ${everyoneHigherSix}`)

/*
Verificar si todas las edades son de adultos:
*/

let ages = [18, 21, 19, 20, 44, 37, 25, 29, 31, 41, 40]
let everyoneAdult = ages.every(function(age){
	return age < 21
})
console.log(`Son todos adultos (mayor a 21): ${everyoneAdult}`)

/*
Dado un array de edades, verifica si todas las personas son mayores de 18 años.
*/

let everyoneOlderEigthteen = ages.every(function(age){
	return age >= 18
})
console.log(`Son todos mayores a 18: ${everyoneOlderEigthteen}`)

/*
Comprobar si todos los números son divisibles por 5:
*/

let allDivisibleByFive = numbers.every(function(num){
	return num % 5 === 0
})
console.log(`Son todos divisibles por 5: ${allDivisibleByFive}`)

/*
Verificar si al menos un número en un array es mayor que 10.
*/

let oneGreaterThanTen = numbers.some(function(num) {
	return num > 10
})
console.log(`Hay alguno mayor a 10: ${oneGreaterThanTen}`)

/*
Comprobar si al menos un string en un array está vacío.
*/

let oneStringIsEmpty = strings.some(function(str){
	 return str === ""
})
console.log(`Hay algun string vacio: ${oneStringIsEmpty}`)

/*
Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
*/

let someoneDidntPass = students.some(function(num){
	return num < 6
})
console.log(`Alguien no paso el examen: ${someoneDidntPass}`)

/*
Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).
*/

let someoneIsATeenager = ages.some(function(age){
	return age >= 13 && age <= 17
})
console.log(`Hay algun adolscente ${someoneIsATeenager}`)