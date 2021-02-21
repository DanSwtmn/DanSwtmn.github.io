const update = ["Software Engineer", "Swift Enthusiast", "iOS Dev", "React JS Dev", "I make the magic happen!"];
let currentTitle = 0;
function changeTitle(lastTitle, nextTitle) {
    if (nextTitle !== lastTitle) {
        currentTitle = nextTitle;
        document.getElementById("ran-update").innerHTML = update[nextTitle];
    } else {
        changeTitle(lastTitle, Math.floor(Math.random() * update.length));
    }
}

setInterval(function(){changeTitle(currentTitle, Math.floor(Math.random() * update.length))}, 2500);