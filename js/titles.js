var update = ["Software Engineer", "Swift Enthusiast", "iOS Dev", "WatchKit Dev", "React JS Dev", "I make the magic happen!"];
var last = 0;
function change(last, next) {
    if (next !== last) {
        self.last = next;
        document.getElementById("ran-update").innerHTML = update[next];
    } else {
        change(last, Math.floor(Math.random() * update.length));
    }
}

setInterval(function(){change(last, Math.floor(Math.random() * update.length))}, 2500);