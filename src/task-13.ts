// Завдання:
// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = "increment" | "decrement";

function reducer(state: number, action: Action): number {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
        // Завдяки типу Action цей блок ніколи не виконається,
       // але TypeScript вимагатиме повернути число
    }
  }

  console.log(reducer(0, "increment")); 
  console.log(reducer(1, "decrement")); 