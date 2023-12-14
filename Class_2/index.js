import dayjs from 'dayjs';
import { greet, sayGoodbye, myPromise } from './greeting.js';

async function printDate() {
  // Promise
  /* myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  }); */

  const response = await myPromise();

  const dateNow = new Date();
  const dateToday = dayjs(dateNow).get('D');

  const [greeting, greeting2] = await Promise.all([greet('Katya', dateToday), greet(response.nombre, dateToday)]) 

  /* const greeting = await greet('Katya', dateToday);
  const greeting2 = await greet(response.nombre, dateToday); */
  const goodbyeFromFunction = sayGoodbye();
  console.log(greeting, greeting2, goodbyeFromFunction);
}

printDate();