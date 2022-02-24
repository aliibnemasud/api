function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => bLoadPost(data));
}

getPost();



function loadPost(posts){  
    const postConatiner = document.getElementById('post-container');   

    for (const post of posts) {
        console.log(post);

        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `;
        postConatiner.appendChild(div);

    }
}


function bLoadPost(posts){

    const cardContainer = document.getElementById('card-container');

    for (const post of posts){

        const div = document.createElement('div');
        div.classList.add('col-sm-6');
        div.classList.add('my-3');
        div.innerHTML = `
            <div class="card">
                <div class="card-body" id="card-da">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>                
            </div>
        `;

        cardContainer.appendChild(div);
        
    }

}





const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));