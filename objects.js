/*
1. Crea un objeto Personaje con las siguientes propiedades:
○ Nombre
○ Raza
○ Edad
○ Clase (por ejemplo: Guerrero, Mago, etc.)
○ Arma
*/

let character = {
  name: "Pijurria",
  race: "Pijurriones",
  age: 19,
  class: "Mago",
  weapon: "Pijurriometro",
};

/*
Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.
*/

character.ally = "Caig";

/*
Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1
usando tanto la notación de punto como la de corchetes.
*/

character.age++;
character["age"]++;

/*
Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si
existe, aumente su edad en 1.
*/

function getOlder(player) {
  if (player.age) {
    player.age++;
  } else {
    return `El personaje ${player.name} no tiene edad`;
  }
  return player.age;
}

/*
Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si
la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres.
*/

function hasAnAlly(player) {
  if (player.ally) {
    if (player.ally.length === 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return `El personaje ${player.name} no tiene aliado`;
  }
}

/*
Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es
igual al Nombre del aliado.
*/

function characterSameNameAsAlly(player) {
  if (player.name === player.ally) {
    return true;
  } else {
    return false;
  }
}

/*
Crea una función que reciba el objeto Personaje y retorne una cadena que describa
al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma],
Raza: [raza]".
*/

function describeCharacter(player) {
  return `Nombre: ${player.name} \nEdad: ${player.age} \nArma: ${player.weapon} \nRaza: ${player.race}`;
}
console.log(describeCharacter(character));

/*
Crea una función que reciba a Personaje y verifique si es mayor de 100 años
(considerando que en el universo de El Señor de los Anillos algunas razas pueden
vivir mucho más tiempo).
*/

function isCharacterOld(player) {
  if (player.age > 100) {
    return `El personaje ${player.name} esta re viejo`;
  } else {
    return `El personaje ${player.name} todavia tiene aventuras por vivir`;
  }
}

/*
Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.
*/

function characterCredentials(player) {
  return {
    name: player.name,
    age: player.age,
  };
}

/*
Añade una propiedad Habilidades que sea un array de habilidades del personaje y
accede a ese array por medio de notación de punto o corchetes.
*/

character.abilities = [
  "Magia Ancestral",
  "Conjuración de Fuego",
  "Teletransportación",
];
console.log(character.abilities[2]);
console.log(character["abilities"][1]);

/*
Crea una función que reciba una habilidad y la agregue al array Habilidades.
*/

function learnNewAbilitie(player, newAbility) {
  if (player.abilities.includes(newAbility)) {
    return `El personaje ${player.name} ya conoce esa habilidad`;
  } else {
    player.abilities.push(newAbility);
    return `El personaje ${player.name} ha aprendido la habilidad ${newAbility}`;
  }
}

/*
Crea una función que reciba una habilidad y la devuelva si existe en el array
Habilidades.
*/

function characterAlreadyKnowsAbility(player, ability) {
  if (player.abilities.includes(ability)) {
    return `El personaje ${player.name} ya conoce esa habilidad`;
  } else {
    return `El personaje ${player.name} no conoce esa habilidad`;
  }
}

/*
Crea una función que retorne cuántas habilidades tiene el personaje.
*/

function howManyAbilitiesHas(player) {
  return `El personaje ${player.name} tiene ${player.abilities.length}`;
}

/*
Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese
array por medio de notación de punto o corchetes.
*/

character.allies = ["Caigsinho", "Tomas Hentai", "Korzu"];
console.log(character.allies[1]);
console.log(character["allies"][0]);

/*
Crea una función que reciba un aliado y lo agregue al array Aliados.
*/

function gainAnAlly(player, newAlly) {
  if (player.allies.includes(newAll)) {
    return `El personaje ${player.name} ya tiene al aliado ${newAlly}`;
  } else {
    player.allies.push(newAlly);
    return `El personaje ${player.name} ha conseguido un nuevo aliado, ${newAlly}`;
  }
}

/*
Crea una función que reciba un aliado y lo elimine del array Aliados.
*/

function loseAnAlly(player, oldAlly) {
  let alliesList = player.allies.filter(function (ally) {
    return ally !== oldAlly;
  });
  player.allies = alliesList;
  return `Has perdido al aliado ${oldAlly}`;
}

/*
Crea una función que devuelva una lista de los nombres de los aliados.
*/

function alliesList(player) {
  return `Los aliados del personaje ${player.name} son: ${player.allies}`;
}

/*
Crea una función que reciba un nuevo nombre de arma y actualice la propiedad
Arma del objeto Personaje.
*/

function gotANewWeapon(player, newWeapon) {
  player.weapon = newWeapon;
  return `El personaje ha obtenido una nueva arma: ${newWeapon}`;
}

/*
Crea una función que reciba una clase y devuelva true o false si el personaje tiene
esa clase.
*/

function characterBelongsToThisClass(player, compareClass) {
  if (player.class === compareClass) {
    return true;
  } else {
    return false;
  }
}

/*
Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad",
"Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar la
propiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos
avanzados.
*/

function newCharacterValue(player, property, newValue) {
  player[property] = newValue;
  return `La caracteristica ${property} ha sido actualizada`;
}
