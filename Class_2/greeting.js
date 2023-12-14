export async function greet(name, dayNumber) {
  return `Hey, ${name}, today is December ${dayNumber}`;
}

/* export function sayGoodbye() {
  return 'Goodbye';
} */

export const sayGoodbye = () => {
  return 'Goodbye';
}


export const myPromise = async () => {
  return {
    nombre: 'Andrés',
    apellido: 'Vargas',
    edad: 28,
    universidad: 'Universidad Autónoma',
    pais: 'Colombia',
  };

  /* new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  }) */
};

