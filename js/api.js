function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(haaha => haaha.json())
    .then(beta => users(beta))
}

function users(users){
        const usersname = document.getElementById('list-element');
         
    for (const user of users){
               
        const li = document.createElement('li');
        li.innerText = user.name;
        usersname.appendChild(li); 
        
    }
}






