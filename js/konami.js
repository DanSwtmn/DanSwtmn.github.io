var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
var memes = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://youtu.be/L_jWHffIx5E?t=35", "https://www.youtube.com/watch?v=jofNR_WkoCE" , "https://www.youtube.com/watch?v=ZZ5LpwO-An4", "https://www.youtube.com/watch?v=U9t-slLl30E","https://www.youtube.com/watch?v=0tdyU_gW6WE&t=99s"];
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key === requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            konamiCodePosition = 0;
            window.location = memes[Math.floor(Math.random() * memes.length)];
        }
    } else {
        konamiCodePosition = 0;
    }
});
