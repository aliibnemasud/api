function kaneyqote(){

    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => kaneyQoute(data)); 
    
}

kaneyqote();

function kaneyQoute(text){

    const kQoute = document.getElementById('kaney-qoate');
    const h2 = document.createElement('h2')
    h2.innerText = text.quote;
    kQoute.appendChild(h2);

}