/*
Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring.
*/

let character1 = {
  name: "Shrek",
  species: "Ogro",
};
let { name, species } = character1;

/*
Crear un objeto con las propiedades nombre, edad, y especie de Burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.
*/

let character2 = {
  name: "Burro",
  age: "34",
  species: "Burro",
};
let { name: character2Name, age: character2Age } = character2;

/*
Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.
*/

let character3 = {
  name: "Fiona",
  species: "Ogro",
};
let { name: character3Name, character3ocuppation = "Desconocida" } = character3;

/*
Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.
*/

character1.age = 44;
function characterNameAndSpecies({ name, species }) {
  return `El personaje se llama ${name} y es de la raza ${species}`;
}

/*
Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.
*/

character1.friends = ["Burro", "Fiona"];
let {
  name: character1Name,
  species: character1Species,
  age: character1Age,
  friends: character1Friends,
  enemies: character1Enemies = [],
} = character1;

/*
Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.
*/

let firstFriend = character1Friends[0];

/*
Crear un array de objetos con las propiedades nombre y edad de Shrek, Burro, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.
*/

let characterCredentialsList = [
  { name: character1Name, age: character1Age },
  { name: character2Name, age: character2Age },
  { name: character3Name, age: 45 },
];
let { name: figure1Name, age: figure1Age } = characterCredentialsList[0];
let { name: figure2Name, age: figure2Age } = characterCredentialsList[1];
let { name: figure3Name, age: figure3Age } = characterCredentialsList[2];

/*
Parte 2

Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.
*/

let shrek = {
  name: "Shrek",
  species: "Ogro",
  age: 34,
  friends: [
    { name: "Burro", species: "Burro" },
    { name: "Fiona", species: "Ogro" },
  ],
};
let { name: shrekName, species: shrekSpecies } = shrek;
let { name: shrekFriend1Name, species: shrekFriend1Species } = shrek.friends[0];
let { name: shrekFriend2Name, species: shrekFriend2Species } = shrek.friends[1];

/*
Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
*/

let movie = {
  title: "Shrek",
  year: 2001,
  characters: [
    { name: "Shrek", species: "Ogro", role: "principal" },
    { name: "Fiona", species: "Humana/Ogro", role: "principal" },
    { name: "Burro", species: "Burro", role: "secundario" },
  ],
};
let { title: movieTitle, characters: movieCharacters } = movie;
mainCharacters = movieCharacters.filter(function (character) {
  if (character.role === "principal") {
    return character;
  }
});
mainCharacterNames = [];
mainCharacters.map(function (character) {
  mainCharacterNames.push(character.name);
});

/*
Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.
*/

let missions = {
  title: "Shrek",
  year: 2001,
  details: {
    mainMission: {
      description: "sisisi",
      characters: ["Shrek", "Burro"],
    },
    secondaryMission: {
      description: "nonono",
      characters: ["Puss in boots", "Lord Farquad"],
    },
  },
};
let {
  details: {
    mainMission: { description: mainDescription },
  },
  details: {
    secondaryMission: { characters: secondaryCharacters },
  },
} = missions;

/*
Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.
*/

let event = {
  name: "fiesta",
  date: "09/11/2024",
  guests: [
    { name: "pijurria", species: "pijurrion", confirmed: true },
    { name: "Shrek", species: "Ogro", confirmed: false },
    { name: "Burro", species: "Burro", confirmed: true },
  ],
};
let { name: eventName, guests: eventGuests } = event;
confirmedGuests = eventGuests.filter(function (guest) {
  if (guest.confirmed === true) {
    return guest;
  }
});
confirmedGuestsNames = [];
confirmedGuests.map(function (guest) {
  confirmedGuestsNames.push(guest.name);
});

/*
Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.
*/

let band = {
  name: "caig y los pijurriones",
  genre: "metal",
  members: [
    { name: "pijurria", instrument: "pijurriometro", experience: 13 },
    { name: "caig", instrument: "bateria", experience: 4 },
    { name: "caigsinho", instrument: "bajo", experience: 7 },
  ],
};
let { genre: bandGenre, members: bandMembers } = band;
experiencedMembers = bandMembers.filter(function (member) {
  if (member.experience > 5) {
    return member;
  }
});
experiencedMembersNames = [];
experiencedMembers.map(function (member) {
  experiencedMembersNames.push(member.name);
});

/*
Parte 3
Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
*/

let ogre = {
  name: "Shrek",
  age: 44,
};
let princess = {
  name: "Fiona",
  age: 44,
};
function createCouple(ogre, princess) {
  let { name: ogreName, age: ogreAge } = ogre;
  let { name: princessName, age: princessAge } = princess;
  let couple = { ogreName, princessName, ogreAge, princessAge };
  if (checkAgeGreater28(couple)) {
    addInitialMission(couple);
  }
  return couple;
}
function checkAgeGreater28({ ogreAge, princessAge }) {
  if (ogreAge > 28 || princessAge > 28) {
    return true;
  } else {
    return false;
  }
}
function addInitialMission(couple) {
  couple.missions = ["Mision inicial"];
}

/*
Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.
*/

let personajes = [
  { name: "Shrek", kingdom: "Pantano" },
  { name: "Fiona", kingdom: "Duloc" },
  { name: "Burro", kingdom: "Pantano" },
];
function matchCharacters(characters) {
  let charactersNames = getValues(characters, "name");
  let charactersKingdoms = getValues(characters, "kingdom");
  let alliance = { charactersNames, charactersKingdoms };
  if (isKingdomSwamp(charactersKingdoms)) {
    alliance.importantPlaces = ["Pantano"];
  }
  return alliance;
}
function getValues(characters, property) {
  let newArray = [];
  characters.map(function (character) {
    newArray.push(character[property]);
  });
  return newArray;
}
function isKingdomSwamp(kingdoms) {
  return kingdoms.includes("Pantano");
}

/*
Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.
*/

let personajes2 = [
  { info: { name: "Shrek", age: 35, kingdom: "Pantano" } },
  { info: { name: "Fiona", age: 28, kingdom: "Duloc" } },
  { info: { name: "Rey Harold", age: 45, kingdom: "Far Far Away" } },
];
function summarizeCharacters(characters) {
  let charactersNames = getValuesFromInfo(characters, "name");
  let charactersAge = getValuesFromInfo(characters, "age");
  let greaterThanThirty = getOldPeople(charactersAge, 30);
  let resume = { charactersNames, greaterThanThirty };
  if (greaterThan40(greaterThanThirty)) {
    resume.categories = ["mayoresDe40"];
  }
  return resume;
}
function getValuesFromInfo(characters, property) {
  let newArray = [];
  characters.map(function (character) {
    newArray.push(character.info[property]);
  });
  return newArray;
}
function getOldPeople(ages, oldAge) {
  let newArray = ages.filter(function (age) {
    return age > oldAge;
  });
  return newArray;
}
function greaterThan40(ages) {
  let someoneOld = ages.some(function (age) {
    return age > 40;
  });
  return someoneOld;
}

/*
Parte 4. Agregamos spread operator

Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.
*/

let person = {
  name: "caig",
  age: 44,
  hobbies: ["hobbie1"],
};
let newHobbies = {
  hobbies: ["Brawl stars", "Zzz"],
};
function addHobbie(person, newHobbies) {
  updatedPerson = {
    ...person,
    hobbies: [...person.hobbies, ...newHobbies.hobbies],
  };
  return updatedPerson;
}

/*
Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.
*/

let personalData = {
  name: "pepe",
  age: "34",
};
let contactData = {
  addres: "buenardopolis",
  phone: "+54 9 11 4664-5122",
};
function updateData(personalData, contactData) {
  fullInformation = { ...personalData, ...contactData };
  return fullInformation;
}

/*
Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.
*/

let vehicle = {
  brand: "renault",
  model: "kwid",
};
let characteristics = {
  color: "azul",
  type: "Zzz?",
};
function addCharacteristics(vehicle, features) {
  if (features.color === "rojo") {
    return { ...vehicle, ...characteristics };
  } else {
    return { ...vehicle };
  }
}
console.log(addCharacteristics(vehicle, characteristics));

/*
Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.
*/
let person1 = {
  name: "pepe",
  age: "34",
  number: "+54 9 11 4664-5122",
};
function deleteNumber(person) {
  let { number, ...personWithoutPhone } = person;
  return number;
}
console.log(deleteNumber(person1));

/*
Parte 5

Crea una función combinacionPersonajes que reciba dos objetos personajes1 y personajes2, donde personajes1 tiene propiedades nombre y habilidades (un array de habilidades), y personajes2 tiene propiedades nombre y atributos (un objeto con fuerza y destreza). Usa el spread operator para combinar habilidades y atributos en un solo objeto informacion, y devuelve un nuevo objeto con el nombre y el objeto informacion combinado.
*/

let character4 = {
  name: "aaaa",
  abilities: ["aaaa", "bbb", "ccc"],
};
let character5 = {
  name: "dqdq",
  atributtes: {
    strength: "muchisimo",
    skill: "muchisisimo",
  },
};

function combineCharacters(character1, character2) {
  let { name, ...restInfo } = { ...character1, ...character2 };
  let combinatedInfo = {
    name: character2.name,
    information: { ...restInfo },
  };
  return combinatedInfo;
}
console.log(combineCharacters(character4, character5));

/*
Crea una función combinarClientes que reciba dos objetos cliente1 y cliente2, donde cliente1 tiene propiedades nombre y datos (un objeto con edad y direccion), y cliente2 tiene propiedades nombre y informacion (un objeto con telefono y email). Usa el spread operator para combinar datos y informacion en un solo objeto perfilCompleto, y devuelve un nuevo objeto con el nombre y el objeto perfilCompleto.
*/

let client1 = {
  name: "Pijurria",
  data: { age: 44, addres: "buenardopolis" },
};
let client2 = {
  name: "caig",
  information: {
    phone: "+54 9 11 2345-0990",
    mail: "aaa@gmail.com",
  },
};

function combineClients(client1, client2) {
  let { name, ...fullInfo } = { ...client1, ...client2 };
  let combinedClients = {
    name: client1.name,
    fullProfile: { ...fullInfo },
  };
  return combinedClients;
}
console.log(combineClients(client1, client2));

/*
Crea una función actualizarPerfil que reciba dos objetos usuario y detalles. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion y telefono. Usa el spread operator para actualizar usuario con direccion y telefono de detalles, pero solo si la edad del usuario es mayor de 25. Si la edad es 25 o menor, establece valores predeterminados para direccion y telefono en el objeto resultante. Devuelve el objeto usuarioActualizado.
*/

let user = {
  name: "aaaa",
  age: 44,
  favoriteColor: "rojo",
};
let details = {
  addres: "buenardopolis",
  number: "+54 9 11 1234-5678",
};
function updateProfile(user, details) {
  let updatedUser = {
    name: user.name,
    age: user.age,
    ...(user.favoriteColor === "morado" && { favoriteColor: "morado" }),
    ...details,
  };
  if (updatedUser.age < 25) {
    updatedUser.addres = "default";
    updatedUser.number = "+5 11 22222222";
  }
  return updatedUser;
}
console.log(updateProfile(user, details));

/*
Crea una función actualizarInfo que reciba dos objetos usuario y detalles, y un array de palabrasClave. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion, telefono, y ocupacion. El array palabrasClave contiene una lista de palabras que pueden estar presentes en el campo colorFavorito de usuario. Usa el spread operator para actualizar el objeto usuario con direccion, telefono, y ocupacion de detalles solo si el colorFavorito de usuario está presente en palabrasClave. Si el colorFavorito no está en palabrasClave, establece valores predeterminados para direccion, telefono, y ocupacion. Devuelve el objeto usuarioActualizado.
*/

let user1 = {
  name: "pijurria",
  age: 24,
  favoriteColor: "rojo",
};
let details1 = {
  addres: "buenardopolis",
  number: "+54 9 11 1234-5678",
  occupation: "pijurriador",
};
let keyColors = ["morado", "azul", "rojo"];
function updateInfo(user, details, acceptedColors) {
  let updatedInfo = { ...user, ...details };
  if (!acceptedColors.includes(updatedInfo.favoriteColor)) {
    (updatedInfo.addres = "default"),
      (updatedInfo.number = "default"),
      (updatedInfo.occupation = "default");
  }
  return updatedInfo;
}
console.log(updateInfo(user1, details1, keyColors));
