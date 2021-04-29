//Технология асинхронного запуска js. Функция становится сразу promise, как только мы добавляем слово async
async function main () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    return data;
}

main().then(resp => console.log(resp));//Функция main возвращает promise
//main();