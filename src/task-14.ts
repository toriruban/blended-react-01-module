// Завдання:
//   Додайте до функції явну типізацію, яка вказує, що вона повертає проміс який приводиться до рядка.
//   Переконайтеся, що якщо message має тип відмінний від рядка, то виникає помилка.
  

function fetchMessage():Promise<string> {
    return new Promise((resolve) => {
      resolve("Hello from server!");
    });
  }
  
  fetchMessage().then(message => console.log(message));

//   return new Promise((resolve) => {
//     resolve(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//   });