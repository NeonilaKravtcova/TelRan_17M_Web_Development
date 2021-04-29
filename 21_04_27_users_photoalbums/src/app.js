function getUsers(){

    document
        .querySelector('#usersList')
        .innerHTML = `<h3><a style="cursor:pointer;" onclick=getUsers()>Users</a></h3>`;

    document
        .querySelector('#albumsList')
        .innerHTML = '';

    document
        .querySelector('#photosList')
        .innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => renderUsers(json))

}
const renderUsers = (listUsers) => {


    listUsers.forEach(user => {
        document
            .querySelector(`#usersList`)
            .innerHTML += `<li><a style="cursor:pointer;" onclick=getAlbums(${user.id})>${user.name}</a></li>`
    })
}

getUsers();

/*function getUserName(id) {
    fetch(`https://jsonplaceholder.typicode.com/users?userId=${id}`)
        .then(response => response.json())
        .then(json => renderUser(json))
}

const renderUser = (user) => {
        document
            .querySelector(`#albumsList`)
            .innerHTML = `<span>${user.name}</span>`
}*/


function getAlbums(id){

    document
        .querySelector('#albumsList')
        .innerHTML = `<h3>Albums</h3>`;//Как сюда вставить имя пользователя, чьи альбомы?
        //.innerHTML =   `<h3>Albums @${getUserName(id)}</h3>`;

    document
        .querySelector('#photosList')
        .innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())
        .then(json => renderAlbums(json))
}

function renderAlbums(listAlbums) {
    listAlbums.forEach(album => {
        document
            .querySelector(`#albumsList`)
            .innerHTML += `<li><a style="cursor:pointer;" onclick=getPhotos(${album.id})>${album.title}</a></li>`
    });
}

function getPhotos(id){

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(response => response.json())
        .then(json => renderPhotos(json))

}

function renderPhotos(listPhotos){
    document
        .querySelector('#photosList')
        .innerHTML = `<h3>Photos</h3>`;//Хорошо бы сюда тоже вставить название альбома. Как?

    listPhotos.forEach(photo => {
        document
            .querySelector(`#photosList`)
            .innerHTML += `<span><a href="${photo.url}"><img src="${photo.thumbnailUrl}" alt="${photo.title}"></a></span>`
    })
}
