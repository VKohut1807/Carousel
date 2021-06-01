let photo = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
let img = document.querySelectorAll("img");
let arrowRight = document.querySelector(".arrowRight");
let arrowLeft = document.querySelector(".arrowLeft");
let toggleInterval = document.querySelector(".toggleInterval");
let steps = ["step1","step2","step3","step4","step5"];
let interval = null;
let speed = 3000;

function slider(){
    valueZero(img);
    valueZero(steps);
    startInterval();
    arrowRight.onclick = right;
    arrowLeft.onclick = left;
    pauseSlider();
}
slider();

function valueZero(param){
    for (let i = 0; i < param.length; i++) {
        param==steps?param[i] = i:param[i].src = `./img/${i}.svg`;
    }
    return param;
}

function startInterval() {
    interval = setInterval(() => {right()}, speed);
}

function right(){
    for (let i = 0; i < steps.length; i++) {
        steps[i] = countUp(steps[i]);
        img[i].src = `./img/${steps[i]}.svg`;
    }
}

function left(){
    for (let i = 0; i < steps.length; i++) {
        steps[i] = countDown(steps[i]);
        img[i].src = `./img/${steps[i]}.svg`;
    }
}

function pauseSlider(){
    toggleInterval.addEventListener('click', ()=>{
        if ( toggleInterval.innerHTML.toLowerCase() === "stop") {
            toggleInterval.style.color = "aquamarine";
            toggleInterval.textContent = "continue".toUpperCase();
            clearInterval(interval);
        } else {
            toggleInterval.style.color = "Coral";
            toggleInterval.textContent = "stop".toUpperCase();
            startInterval();
        }
    });
}

function countUp(param) {
    param == photo.length-1? param = 0:param++;
    return param;
}

function countDown(param) {
    param == 0? param = photo.length-1:param--;
    return param;
}