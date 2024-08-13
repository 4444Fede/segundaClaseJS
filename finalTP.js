/*
Eres un joven Padawan en el universo de Star Wars, y tu tarea es crear un sistema para gestionar los Jedi en la Orden Jedi. Necesitas construir un array de objetos que represente a los Jedi, donde cada objeto debe contener la información básica de un Jedi. Cada Jedi debe tener una clave única (id) para identificarlo de forma exclusiva. 

Luego, implementa las siguientes funciones (Debes nombrar las funciones adecuadamente):
Se quieren agregar nuevos Jedi al array si aún no existen, basándose en la clave única id.
Se quiere actualizar la información de un Jedi ya existente usando filtrado por la clave id.
Se quiere obtener un array con todos los Jedi de tipo “Maestros”
Se quiere obtener un array con todos los Jedi que cumplan con el nivel pasado por parámetro. Se debe verificar que el nivel sea “Padawan”, “Caballero” o “Maestro”
Se quieren agregar habilidades nuevas a un Jedi existente. Verificar que el jedi exista y que las habilidades nuevas no existan dentro del Jedi.
Se quiere eliminar un jedi por id
Se quieren comparar los niveles entre dos Jedi, devuelva un objeto con los nombres y los niveles de los Jedi, y cual de los dos es el más fuerte
*/

let jediOrder = [
    {
        id: 0,
        name: "Obi-Wan Kenobi",
        level: "Maestro",
        specialty: "Uso de la Fuerza",
        skills: ["Telequinesis", "Sable de Luz"]
    },
    {
        id: 1,
        name: "Anakin Skywalker",
        level: "Caballero",
        specialty: "Combate con sable de luz",
        skills: ["Sable de Luz", "Telequinesis"]
    },
    {
        id: 2,
        name: "Ahsoka Tano",
        level: "Padawan",
        specialty: "Combate con sable de luz",
        skills: ["Sable de Luz"]
    }
];
let newJedi = {
    name: "Yoda",
    level: "Maestro",
    specialty: "Uso de la Fuerza",
    skills: ["Telequinesis", "Meditación"]
};

function jediExists(jediOrder, idToVerify) {
	let idExists = jediOrder.some(function(jedi) {
		return jedi.id === idToVerify
	})
	return idExists
}

function addJedi(jediOrder, newId, newJedi) {
	if (jediExists(jediOrder, newId)) {
		jediOrder.push({id : newId, ...newJedi})
	}
	return jediOrder
}

function updateJediInfo(jediOrder, jediId, keyValue, newValue) {
	jediOrder.map(function (jedi) {
		if (jediId === jedi.id) {
			jedi[keyValue] = newValue
		}
	})
	return `Actualizacion: ${jediOrder[jediId]}`
}

function getMasterJedis(jediOrder){
	return jediOrder.filter(function (jedi) {
		return jedi.level === 'Maestro'
	})
}

function getJediByLevel(jediOrder, filterLevel){
	if (filterLevel === 'Padawan' || filterLevel === 'Caballero' || filterLevel === 'Maestro') {
		return jediOrder.filter(function (jedi) {
			return jedi.level === filterLevel
		})
	}else{
		return `El nivel proporcionado: ${filterLevel}, no es un nivel reconocido por la orden Jedi`
	}
}

function addSkills(jediOrder, jediId, skills) {
	if (jediExists(jediOrder, jediId)) {
		skills.map(function(skill) {
			if(!jediOrder[jediId].skills.includes(skill)){
				jediOrder[jediId].skills.push(skill)
			}
		})
		return jediOrder[jediId].skills
	}else{
		return `El jedi id proporcionado no existe`
	}

}

function deleteJedi(jediOrder, jediId){
	if (jediExists(jediOrder, jediId)){
		return jediOrder.filter(function (jedi) {
			return jedi.id != jediId
		})
	}else{
		return `El id jedi proporcionado no existe`
	}
}

function compareJedi(jediOrder, firstJediId, secondJediId){
	const levels = {Padawan : 1, Caballero : 2, Maestro : 3}
	if (jediExists(jediOrder, firstJediId)) {
		if (jediExists(jediOrder, secondJediId)) {
				let firstJedi = jediOrder.find(function(jedi){
					return jedi.id === firstJediId
				})
				let secondJedi = jediOrder.find(function(jedi){
					return jedi.id === secondJediId
				})
			let strongerJedi = levels[firstJedi.level] > levels[secondJedi.level] ? firstJedi.name : secondJedi.name;
			return {
				jedi1 : {name : firstJedi.name, level : firstJedi.level},
				jedi2 : {name : secondJedi.name, level : secondJedi.level},
				strongerJedi 
			}
		}else{
			return `El segundo jedi introducido no existe`
		}
	}else{
		return `El primer jedi introducido no existe`
	}
}