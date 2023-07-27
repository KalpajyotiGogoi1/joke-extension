const myJoke = document.querySelector("#myJoke");

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(data => data.json())
        .then(obj => myJoke.innerHTML = obj.joke)
}

window.addEventListener("load", () => {
    getJoke();
});