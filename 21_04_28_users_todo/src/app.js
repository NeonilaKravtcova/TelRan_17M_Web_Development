
function getUser(id) {
    fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            renderUser(json);
            getToDo(id);
        })
}

const renderUser = (user) => {
    document
        .querySelector('#userInfo')
        .innerHTML = `<h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.phone}</p>`
}

function getToDo(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(resp => resp.json())
        .then(json => {
            renderListToDos(json);
        })
}

const renderListToDos = (listToDos) => {
    listToDos.forEach(elt => {
        document
            .querySelector('#userToDos')
            .innerHTML += `<p>• ${elt.title}</p>`
    })

}

getUser(5);

