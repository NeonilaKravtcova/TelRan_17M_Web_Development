const renderUsers = (userList) => {
    userList.forEach(user => {
        document
            .querySelector('#userList')
            .innerHTML += `<li id="user_${user.id}">
            <a href="https://jsonplaceholder.typicode.com/albums?userId=${user.id}" onclick='return getAlbums(id)'">${user.name}</a></li>`;
    })
}

const usersListener = () => {
    const list = document.querySelectorAll('#userList li');
    for ( let item of list ) {
        item.addEventListener('click', event => {
            event.preventDefault();
            const [,id] = event.target.id.split('_');
            getAlbums(id);
        })
    }
}

const getAlbums = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())
        .then(data => renderAlbumList(data))
}

/*
const renderAlbumList = (albumsList) => {
    const albums = document.querySelector('#albumsList');
    albums.innerHTML = '';
    albumsList.forEach(album => {
        document
            .querySelector('#albumsList')
            .innerHTML += <li id="album_${album.id}">${album.title}</li>
    })
}
*/


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data => {
        renderUsers(data);
        usersListener();
    } )