const APIURL = "https://api.github.com/users/";
const form = document.querySelector('#form');
const main = document.querySelector('#main');
const search = document.querySelector('#search');

getuser('David');

async function getuser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
    getRepos(username);
}

async function getRepos(username){
    const resp = await fetch(APIURL + username +'/repos');
    const respData = await resp.json();

    addReposToCard(respData);

}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos');

    repos.forEach((repo) => {

       const repoEl = document.createElement('a');
       repoEl.classList.add('repo');
       repoEl.href = repo.html_url;
       repoEl.target = "_blank";
       repoEl.innerText = repo.name;

       reposEl.appendChild(repoEl);
        
    });

}

function createUserCard(user) {

    const cardHTML = `
    <div class="card">
    <div class="img-container">
        <img src="${user.avatar_url}" alt="${user.name}" srcset="" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
    
    <ul class="info">
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Reposts</strong></li>
    </ul>
    <div id="repos"></div>
    </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getuser(user);
        search.value = '';

    }
    console.log(`hello`);

});