// Завдання:
//   Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.


function sendDoneStatus(callback: (status: string) => void): void {
    callback("done");
}

// - задати для аргумента callback тип функції, а не string
// - status — це просто ім’я параметра, яке ми даємо першому (і єдиному) аргументу цієї функції.
// — тобто “callback” має бути функцією, яка отримує status типу string і повертає void.
// - void після списку параметрів, щоб вказати, що sendDoneStatus нічого не повертає.
