const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// runs blurring function every 30ms
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if(load > 99) {
        // stops the interval
        clearInterval(int);
    }

    // changes the opacity of the text
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // changes the blur of the background
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(load);
}

// function to scale a number
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}