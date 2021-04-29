// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         // console.log(response.text());
//         return response.text();
//     })
//     .then(
//         data => {
//             console.log( data );
//             return JSON.parse(data);
//         }
//     )
//     .then((dataObject) => {
//         console.log(dataObject);
//     });


// const renderTodo = (data) => {
//     document.querySelector('ul').innerHTML += `<li>${data}</li>`;
// }
//
// fetch('https://jsonplaceholder.typicode.com/todas?userId=1')
//     .then(response => response.json())
//     .then(json => {
//         console.log( json );
//         json.forEach( ele => renderTodo(ele.title) )
//         // renderTodo( json.title )
//     })
//     .catch(err => console.log( err.toString() ))
//     .finally(() => console.log('worked'))

const renderUsers = (userList) => {
    userList.forEach(user => {
        document
            .querySelector('#userList')
            .innerHTML += `<li id="user_${user.id}">${user.name}</li>`;
    })
}

const usersListener = () => {
    const list = document.querySelectorAll('#userList li');
    for ( let item of list ) {
        item.addEventListener('click', event => {
            event.preventDefault();
            const [,id] = event.target.id.split('_');
            getTodos(id);
        })
    }
}



const getTodos = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(response => response.json())
        .then( data => renderToDoList( data ) )
}

const renderToDoList = (todoList) => {
    const todos = document.querySelector('#todoList');
    todos.innerHTML = '';
    todoList.forEach(todo => {
        document
            .querySelector('#todoList')
            .innerHTML += `<li>${todo.title}</li>`;
    })
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data => {
        renderUsers(data);
        usersListener();
    } )