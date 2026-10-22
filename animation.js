
// The vampire goes west, and the bat goes south.

const scene = document.querySelector("#scene");
const statusText = document.querySelector("#status");

const vampireData = {
    arrImgs: [
        "vampire0.png", "vampire1.png", "vampire2.png", "vampire3.png",
        "vampire4.png", "vampire5.png", "vampire6.png", "vampire7.png",
        "vampire8.png", "vampire9.png", "vampire10.png", "vampire11.png",
        "vampire12.png", "vampire11.png", "vampire10.png", "vampire9.png",
        "vampire8.png", "vampire7.png", "vampire6.png", "vampire5.png",
        "vampire4.png", "vampire3.png", "vampire2.png", "vampire1.png"
    ],
    elem: document.querySelector("#vampire"),
    poseNumber: 0,
    x: 0,
    y: 145,
    speed: 4
};

const batData = {
    arrImgs: [
        "bat0.png", "bat1.png", "bat2.png", "bat3.png",
        "bat4.png", "bat5.png", "bat6.png", "bat7.png",
        "bat8.png", "bat9.png", "bat10.png", "bat11.png"
    ],
    elem: document.querySelector("#bat"),
    poseNumber: 0,
    x: 0,
    y: 0,
    speed: 3
};

let timerId = null;

function showCharacters() {
    vampireData.elem.style.left = vampireData.x + "px";
    vampireData.elem.style.top = vampireData.y + "px";
    vampireData.elem.src = vampireData.arrImgs[vampireData.poseNumber];

    batData.elem.style.left = batData.x + "px";
    batData.elem.style.top = batData.y + "px";
    batData.elem.src = batData.arrImgs[batData.poseNumber];
}

function frame() {
    // Vampire moves left (West).
    vampireData.x -= vampireData.speed;

    if (vampireData.x < -128) {
        vampireData.x = scene.clientWidth;
    }

    // Bat moves down (South).
    batData.y += batData.speed;

    if (batData.y > scene.clientHeight) {
        batData.y = -128;
    }

    // Change animation frames using arrays.
    vampireData.poseNumber =
        (vampireData.poseNumber + 1) % vampireData.arrImgs.length;

    batData.poseNumber =
        (batData.poseNumber + 1) % batData.arrImgs.length;

    showCharacters();
}

function startAnimation() {
    if (timerId === null) {
        timerId = setInterval(frame, 100);
        statusText.textContent = "The characters are moving!";
    }
}

function stopAnimation() {
    clearInterval(timerId);
    timerId = null;
    statusText.textContent = "Animation stopped.";
}

function resetAnimation() {
    stopAnimation();

    vampireData.x = scene.clientWidth - 128;
    vampireData.y = 145;
    vampireData.poseNumber = 0;

    batData.x = Math.round(scene.clientWidth * 0.35);
    batData.y = -40;
    batData.poseNumber = 0;

    showCharacters();

    statusText.textContent =
        "Vampire goes West (left). Bat goes South (down).";
}

resetAnimation();
