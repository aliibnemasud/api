const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => buddies(data));
}

loadBuddies();

const buddies = data => {    
    const buddiesc = data.results;
    const rBuddies = document.getElementById('buddies');
    for (const buddy of buddiesc){        
        const p = document.createElement('p');
        p.innerText = buddy.email;
        rBuddies.appendChild(p);  

    }
}



