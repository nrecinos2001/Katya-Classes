// Tipos de variables
const name = 'Katya'; // constantes son variables recomendadas
let name2 = '10'; // let no son recomendadas, pero hay escenarios especiales en que se pueden utilizar
var university = 'UCA'; // var no deberian de usarse

// Tipos de valor valores
const age = 18; // numerico
const height = 1.32; // numerico
const isMan = true; // booleano
const isWoman = false; // booleano
const days = [1, 2, 3, 4, 5, 6]; // arreglos
const person = {
  name: 'Nestor',
  age: 13,
  university: 'UCA',
  isMan: true,
  subject: {
    subject1: 'Calculo 3',
  }
} // objetos

// Condicionales
if (person.age) {
  const { name, age } = person;
  //console.log('Hey', name, age);
} else {
  //console.log('Hello, lady!');
}

//switch (person.age > 18) {
  //case true: console.log('Persona Mayor de edad');
    //break;
  //default: console.log('No se la edad bro');
    //break;
//}
person.cierto?.atributo; // El ?. se utiliza cuando un atributo puede no existir y no deberia de 
// dañar el flujo del sistema

// Operador ternario
const isOverAge = person.age >= 18 ? 'Es mayor de edad' : 'Ta chikito';
//console.log(isOverAge);


// Bucles
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

let u = 10;
let counter = 0;
while (counter < u) {
  //console.log(counter);
  counter++;
}

let counter2 = 0;
let j = 10;
do {
  //console.log(counter2);
  counter2++;
} while (counter2 < j);

const registrosFalsos = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    universidad: 'Universidad Central',
    pais: 'Argentina',
  },
  {
    nombre: 'María',
    apellido: 'Gómez',
    edad: 22,
    universidad: 'Universidad Nacional',
    pais: 'México',
  },
  {
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    edad: 28,
    universidad: 'Universidad Autónoma',
    pais: 'Colombia',
  },
  {
    nombre: 'Laura',
    apellido: 'Martínez',
    edad: 25,
    universidad: 'Universidad Central',
    pais: 'Argentina',
  },
  {
    nombre: 'Pedro',
    apellido: 'López',
    edad: 22,
    universidad: 'Universidad Nacional',
    pais: 'México',
  },
  {
    nombre: 'Ana',
    apellido: 'Hernández',
    edad: 28,
    universidad: 'Universidad Autónoma',
    pais: 'Colombia',
  },
  {
    nombre: 'Diego',
    apellido: 'García',
    edad: 25,
    universidad: 'Universidad Central',
    pais: 'Argentina',
  },
  {
    nombre: 'Elena',
    apellido: 'Díaz',
    edad: 22,
    universidad: 'Universidad Nacional',
    pais: 'México',
  },
  {
    nombre: 'Andrés',
    apellido: 'Vargas',
    edad: 28,
    universidad: 'Universidad Autónoma',
    pais: 'Colombia',
  },
  {
    nombre: 'Sofía',
    apellido: 'Fernández',
    edad: 25,
    universidad: 'Universidad Central',
    pais: 'Argentina',
  },
];

// Manipular arreglos y obtener una version alterada
const updatedArray = registrosFalsos.map((item) => {
  const { nombre, apellido, edad, universidad, pais } = item;
  return {
    nombreCompleto: `${nombre} ${apellido} - ${universidad}`,
    edad,
    pais,
  }
});

// Filtrar elementos
const filteredArray = registrosFalsos.filter((item) => item.edad === 22);

for (const element of registrosFalsos) {
  console.log(element.apellido)
}

//console.log(filteredArray);
