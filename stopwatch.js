let ms=0;
let s=0;
let m=0;
let u=0;
let run; 

// let kan ook ipv var, houd in dat het veranderd kan worden
// const houd in dat het constant is

function start() {
    document.getElementById('reset').style.display = 'none';

    ms = ms + 10;
    if (ms > 1000){
        ms = 0;
        s++;
    }
    
    if (s > 60){
        s = 0;
        m++;
    }

    if (m > 60){
        m = 0;
        u++;
    }

    document.getElementById('mseconde') .innerHTML = ms;
    document.getElementById('seconde') .innerHTML = s;
    document.getElementById('minuut') .innerHTML = m;
    document.getElementById('uur') .innerHTML = u;

    run = setTimeout(start, 10)
}

function stop() {

    clearTimeout(run);
    document.getElementById('reset').style.display = 'inline-block';
   
}

 function reset() {

        let ms=0;
        let s=0;
        let m=0;
        let u=0;

        document.getElementById('mseconde') .innerHTML = ms;
        document.getElementById('seconde') .innerHTML = s;
        document.getElementById('minuut') .innerHTML = m;
        document.getElementById('uur') .innerHTML = u;

    }