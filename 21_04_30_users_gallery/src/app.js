function getUsers(){

    document
        .querySelector('#usersList')
        .innerHTML = `<h3><a style="cursor:pointer;" onclick=getUsers()>Users</a></h3>`;

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => renderUsers(json))

    //usersListener();

}

const renderUsers = (listUsers) => {
    listUsers.forEach(user => {
        document
            .querySelector(`#usersList`)
            .innerHTML += `
                <div class="column">
                    <div class="row">
                        <div class="card">
                            <a style="cursor:pointer;" onclick=renderUserPortfolio(${user.id})>${user.name}</a>
                        </div>
                    </div> 
                </div>`
    })
}

/*const usersListener = () => {
    const list = document.querySelectorAll("#users div");
    for (let item of list) {
        item.addEventListener('click', event => {
            event.preventDefault();
            const [, id] = event.currentTarget.id.split("_");//[user, id]
        })
    }
}*/

getUsers();

function renderUserPortfolio(id){

    document
        .querySelector("#userPortfolio")
        .querySelector("#tabs")
        .innerHTML = `
                        <!-- Tabs navigation panel -->
                        <div class="tabs__nav">
                            <a class="tabs__link tabs__link_active" onclick=getUserInfo(${id})>INFO</a>
                            <a class="tabs__link" onclick=getToDos(${id})>TODO</a> 
                            <a class="tabs__link" onclick=getPosts(${id})>POSTS</a> 
                            <a class="tabs__link" onclick=getAlbums(${id})>ALBUMS</a> 
                        </div>`;
}

function getUserInfo(id) {

    fetch(`https://jsonplaceholder.typicode.com/users?userId=${id}`)
        .then(resp => resp.json())
        .then(json => renderUserInfo(json)
        );
}

function renderUserInfo(user) {

    document
        .querySelector("#todos")
        .innerHTML = '';

    document
        .querySelector("#posts")
        .innerHTML = '';

    document
        .querySelector("#albums")
        .innerHTML = '';


    document
        .querySelector("#info")
        .innerHTML = `<div class="tab_content">Hello</div>
                      <div class="tab_content">My name is ${user.name}</div>`;
}

function getToDos(id){
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(resp => resp.json())
        .then(json => renderToDos(json)
        );
}

function renderToDos(listToDos) {

    document
        .querySelector("#info")
        .innerHTML = '';

    document
        .querySelector("#posts")
        .innerHTML = '';

    document
        .querySelector("#albums")
        .innerHTML = '';

    listToDos.forEach(elt => {
        document
            .querySelector("#todos")
            .innerHTML += `<li class="tab_content">${elt.title}</li>`;
    })
}

function getPosts(id){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(resp => resp.json())
        .then(json => renderPosts(json)
        );
}

function renderPosts(listPosts){

    document
        .querySelector("#info")
        .innerHTML = '';

    document
        .querySelector("#todos")
        .innerHTML = '';

    document
        .querySelector("#albums")
        .innerHTML = '';

    listPosts.forEach(elt => {
        document
            .querySelector("#posts")
            .innerHTML += `<li class="tab_content">${elt.title} ()</li>`;
    })
}

function getAlbums(id){

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())
        .then(json => renderAlbums(json))
}

function renderAlbums(listAlbums) {

    document
        .querySelector("#info")
        .innerHTML = '';

    document
        .querySelector("#todos")
        .innerHTML = '';

    document
        .querySelector("#posts")
        .innerHTML = '';


    listAlbums.forEach(album => {
        document
            .querySelector("#albums")
            /*.innerHTML += `<li><a style="cursor:pointer;" onclick=getPhotos(${album.id})>${album.title}</a></li>`*/
            .innerHTML += `<li class="tab_content">${album.title}</li>`
    });
}


// document.getElementById("defaultOpen").click();