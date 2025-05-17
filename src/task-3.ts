// Завдання:
// Типізуйте user.
// Зробіть властивість id тільки для читання.

interface User {
    readonly id: string,
    name: string,
    age: number,
    active: boolean
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

console.log(user.id);
console.log(user.name);
console.log(user.age);
console.log(user.active);

