/*
Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
Nombre del usuario
Cantidad de materias cursadas
Cantidad de materias aprobadas
Las notas de las materias aprobadas
Cantidad de materias reprobadas
Las notas de las materias reprobadas
Si el alumno pasó de año (aprobó todas las materias)
*/

let name = 'Pijurria'
let grades = [4, 3, 5, 9, 10, 2, 7]
let passingGrade = 4

function reportCard(name, grades, passingGrade) {
	let coursesTaken = grades.length
	let coursesPassed = grades.filter(function(grade){
		return grade >= 4
	})
	let amountCoursesPassed = coursesPassed.length
	let coursesFailed = grades.filter(function(grade){
		return grade < 4
	})
	let amountCoursesFailed = coursesFailed.length
	let passedTheYear = coursesTaken === amountCoursesPassed ? 'pasó' : 'no pasó'
	let barelyPassed = grades.includes(passingGrade) ? 'sí' : 'no'

	console.log(`Nombre: ${name} \nMaterias cursadas: ${coursesTaken} \nMaterias aprobadas: ${amountCoursesPassed} \nNotas aprobadas: ${coursesPassed} \nMaterias desaprobadas ${amountCoursesFailed} \nNotas desaprobadas: ${coursesFailed} \nPaso de año: ${passedTheYear} \nAprobo alguna de pedo: ${barelyPassed}`)
}
reportCard(name, grades, passingGrade)