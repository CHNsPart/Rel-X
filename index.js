const container = document.getElementById('container');
const bgbtn = document.getElementById('bgchange');
const text = document.getElementById('text');
const ball = document.getElementById('circle-color');
const circle = document.getElementById('circle');
const pausee = document.getElementById("pausee");
const play = document.getElementById("play");
const audio = document.getElementById("audio");
const shuffle = document.getElementById("shuffle");
const stopee = document.getElementById("stop");
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
var auds = ['audio/Uku1.m4a', 'audio/ukSol2.m4a', 'audio/DraftsongUkU 1.m4a', 'audio/5sG draft.m4a'];
var str = 'audio/5sG draft.m4a';
var a = 0;
var i = 1;

play.addEventListener('click', function(e) {
    e.preventDefault();
    audio.play();
});
pausee.addEventListener('click', function(e) {
    e.preventDefault();
    audio.pause();
});
shuffle.addEventListener('click', function(e) {
    e.preventDefault();
    if (a === 0) {
        str = auds[0];
        audio.setAttribute('src', str);
        audio.play();
        a++;
    } else if (a === 1) {
        str = auds[1];
        audio.setAttribute('src', str);
        audio.play();
        a++;
    } else if (a === 2) {
        str = auds[2];
        audio.setAttribute('src', str);
        audio.play();
        a++;
    } else {
        str = 'audio/5sG draft.m4a';
        audio.setAttribute('src', str);
        audio.play();
        a = 0;
    }

});
stopee.addEventListener('click', function(e) {
    e.preventDefault();
    audio.pause();
    audio.currentTime = 0;
});

bgbtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (i === 0) {
        document.body.style.backgroundImage = "url('img/jill.jpg')";
        ball.removeAttribute('class');
        circle.removeAttribute('class');
        ball.classList.add('gradient-circle-jill');
        circle.classList.add('circle-jill');
        i++;
    } else if (i === 1) {
        document.body.style.backgroundImage = "url('img/tree.png')";
        ball.removeAttribute('class');
        circle.removeAttribute('class');
        ball.classList.add('gradient-circle-tree');
        circle.classList.add('circle-tree');
        i++;
    } else if (i === 2) {
        document.body.style.backgroundImage = "url('img/winter.png')";
        ball.removeAttribute('class');
        circle.removeAttribute('class');
        ball.classList.add('gradient-circle-winter');
        circle.classList.add('circle-winter');
        i++;
    } else {
        document.body.style.backgroundImage = "url('img/leaf.png')";
        ball.removeAttribute('class');
        circle.removeAttribute('class');
        ball.classList.add('gradient-circle');
        circle.classList.add('circle');
        i = 0;
    }

})

function breathAnimation() {
    text.innerText = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold!';

        setTimeout(() => {
            text.innerText = 'Breath Out';
            container.className = 'container shrink';
        }, holdTime);
    }, breathTime);
}
setInterval(breathAnimation, totalTime);