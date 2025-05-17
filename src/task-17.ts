//   Завдання:
//   Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
//   Типізуйте функцію fetchUsers.

interface Geo {
    lat: number,
    lng: number
}

interface Address {
    street: string;   
    suite: string;  
    city: string;   
    zipcode: string; 
    geo: Geo;
  }

  interface Company {
    name: string;       
    catchPhrase: string; 
    bs: string;          
  }

  export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json() as User[];
    return data;
  };
  
  fetchUsers().then((users) => console.log(users));