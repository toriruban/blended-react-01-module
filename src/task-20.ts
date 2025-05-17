//Завдання:
// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.

import axios from "axios";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
    const posts = await fetchPosts();
    const firstThree = posts.slice(0, 3); // Відбираємо перші три елементи

    firstThree.forEach((post, index) => {
        console.log(`Post #${index + 1}`);
        console.log(`Title: ${post.title}`);
    });
}

logThreePosts();