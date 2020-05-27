var update = ["Software Engineer","Swift Enthusiast", "iOS Dev", "WatchKit Dev", "React JS Dev", "I make the magic happen!"];
var  last = 0;
function change(last, next) {
    if (next !== last) {
        self.last = next;
        return document.getElementById("ran-update").innerHTML = update[next];
    } else {
        return self.change(last, Math.floor(Math.random() * update.length));
    }
}

setInterval(function() {change(last, Math.floor(Math.random() * update.length))}, 2500);