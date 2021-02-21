var twitter = lottie.loadAnimation({
    container: document.getElementById("twitter"), 
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/Twitter/twitter.json"
});

document.getElementById("twitter").addEventListener('mouseover', function() {
    twitter.play();
});
document.getElementById("twitter").addEventListener('mouseout', function() {
    twitter.stop();
});

var github = lottie.loadAnimation({
    container: document.getElementById("github"), 
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/Github/github.json"
});

document.getElementById("github").addEventListener('mouseover', function() {
    github.play();
});
document.getElementById("github").addEventListener('mouseout', function() {
    github.stop();
});

var linkedin = lottie.loadAnimation({
    container: document.getElementById("linkedin"), 
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/Linkedin/linkedin.json"
});

document.getElementById("linkedin").addEventListener('mouseover', function() {
    linkedin.play();
});
document.getElementById("linkedin").addEventListener('mouseout', function() {
    linkedin.stop();
});

var mail = lottie.loadAnimation({
    container: document.getElementById("mail"), 
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "assets/Mail/mail.json"
});

document.getElementById("mail").addEventListener('mouseover', function() {
    mail.play();
});
document.getElementById("mail").addEventListener('mouseout', function() {
    mail.stop();
});

var file = lottie.loadAnimation({
    container: document.getElementById("file"), 
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/File/file-text.json"
});

document.getElementById("file").addEventListener('mouseover', function() {
    file.play();
});
document.getElementById("file").addEventListener('mouseout', function() {
    file.stop();
});

