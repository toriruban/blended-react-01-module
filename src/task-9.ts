// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.


// 1️⃣ Оголошуємо generic-інтерфейс Container<T>
//    — T — довільний тип елементів, які будемо зберігати
interface Container<T> {
    items: T[];                // масив елементів типу T
    addItem(item: T): void;    // метод для додавання елемента
    getItem(index: number): T | undefined; // метод для отримання елемента за індексом
  }
  
  // 2️⃣ Реалізуємо клас ArrayContainer<T>, що імплементує Container<T>
  class ArrayContainer<T> implements Container<T> {
    items: T[] = [];           // початково порожній масив
  
    addItem(item: T): void {
      this.items.push(item);    // додаємо в кінець масиву
    }
  
    getItem(index: number): T | undefined {
      return this.items[index]; // повертаємо елемент або undefined
    }
  }
  
  // 3️⃣ Створюємо спеціалізовані контейнери
  const numberContainer = new ArrayContainer<number>(); // контейнер чисел
  const stringContainer = new ArrayContainer<string>(); // контейнер рядків
  
  // 4️⃣ Додаємо елементи у контейнери
  numberContainer.addItem(10);
  numberContainer.addItem(20);
  
  stringContainer.addItem("hello");
  stringContainer.addItem("world");
  
  // 5️⃣ Отримуємо елементи по індексу
  console.log(numberContainer.getItem(0)); // → 10
  console.log(numberContainer.getItem(1)); // → 20
  
  console.log(stringContainer.getItem(0)); // → "hello"
  console.log(stringContainer.getItem(1)); // → "world"
  
  // 6️⃣ Оголошуємо generic-функцію getLastElement<T>
  //    — приймає будь-який Container<T> і повертає останній елемент
  function getLastElement<T>(container: Container<T>): T | undefined {
    const len = container.items.length;    // довжина масиву
    return len > 0 
      ? container.items[len - 1]           // останній елемент
      : undefined;                         // якщо порожній, повертаємо undefined
  }
  
  // 7️⃣ Перевіряємо getLastElement на різних контейнерах
  console.log(getLastElement(numberContainer)); // → 20
  console.log(getLastElement(stringContainer)); // → "world"
  
  // (опційно) Порожній контейнер
  const emptyContainer = new ArrayContainer<boolean>();
  console.log(getLastElement(emptyContainer)); // → undefined
  