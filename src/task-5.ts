// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

interface User {
    name: string,
    age: number
}

// Описуємо, що саме повертає createUser
interface CreatedUser extends User {
    isAdmin: boolean;
}

function createUser({name, age}: User): CreatedUser  { //Повернення : CreatedUser — інтерфейс, що розширює User додатковим полем isAdmin: boolean.
     return {
        name,
        age,
        isAdmin: false
      };
    }
    
   console.log(createUser({ name: "Alice", age: 30 }))
    