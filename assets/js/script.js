
let playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

const tone = ["assets/sounds/C4.mp3", "assets/sounds/Db4.mp3", "assets/sounds/D4.mp3",
    "assets/sounds/Eb4.mp3", "assets/sounds/E4.mp3", "assets/sounds/F4.mp3", "assets/sounds/Gb4.mp3",
    "assets/sounds/G4.mp3", "assets/sounds/Ab4.mp3", "assets/sounds/A4.mp3", "assets/sounds/Bb4.mp3",
    "assets/sounds/B4.mp3", "assets/sounds/C5.mp3", "assets/sounds/Db5.mp3", "assets/sounds/D5.mp3",
    "assets/sounds/Eb5.mp3", "assets/sounds/E5.mp3"]

const keyName = ['c4', 'db4', 'd4', 'eb4', 'e4', 'f4', 'gb4', 'g4', 'ab4', 'a4', 'bb4', 'b4', 'c5', 'db5', 'd5', 'eb5', 'e5']


var i = 0

function Key(x) {

    function testSound(x) {
        for (let i = 0; i <= keyName.length; i++) {
            if (x == keyName[i]) {
                return i
            }
        }

    }

    index = testSound(x)
    var sound = new Audio(tone[index]);

    playSound(sound);
}

// // Db4
// var sound = new Audio(tone[index]);
// function db4Key() {
//     const db4sound = playSound(Db4);
// }

// // D4
// const D4 = new Audio("assets/sounds/D4.mp3");
// function d4Key() {
//     const d4sound = playSound(D4);
// }

// // Eb4
// const Eb4 = new Audio("assets/sounds/Eb4.mp3");
// function eb4Key() {
//     const Eb4sound = playSound(Eb4);
// }

// // E4
// const E4 = new Audio("assets/sounds/E4.mp3");
// function e4Key() {
//     const e4sound = playSound(E4);
// }

// // F4
// const F4 = new Audio("assets/sounds/F4.mp3");
// function f4Key() {
//     const f4sound = playSound(F4);
// }

// // Gb4
// const Gb4 = new Audio("assets/sounds/Gb4.mp3");
// function gb4Key() {
//     const gb4sound = playSound(Gb4);
// }

// // G4
// const G4 = new Audio("assets/sounds/G4.mp3");
// function g4Key() {
//     const g4sound = playSound(G4);
// }

// // Ab4
// const Ab4 = new Audio("assets/sounds/Ab4.mp3");
// function ab4Key() {
//     const ab4sound = playSound(Ab4);
// }

// // A4
// const A4 = new Audio("assets/sounds/A4.mp3");
// function a4Key() {
//     const a4sound = playSound(A4);
// }

// // Bb4
// const Bb4 = new Audio("assets/sounds/Bb4.mp3");
// function bb4Key() {
//     const bb4sound = playSound(Bb4);
// }

// // B4
// const B4 = new Audio("assets/sounds/B4.mp3");
// function b4Key() {
//     const b4sound = playSound(B4);
// }

// // C5
// const C5 = new Audio("assets/sounds/C5.mp3");
// function c5Key() {
//     const c5sound = playSound(C5);
// }

// // Db5
// const Db5 = new Audio("assets/sounds/Db5.mp3");
// function db5Key() {
//     const db5sound = playSound(Db5);
// }

// // D5
// const D5 = new Audio("assets/sounds/D5.mp3");
// function d5Key() {
//     const d5sound = playSound(D5);
// }

// // Eb5
// const Eb5 = new Audio("assets/sounds/Eb5.mp3");
// function eb5Key() {
//     const eb5sound = playSound(Eb5);
// }

// // E5
// const E5 = new Audio("assets/sounds/E5.mp3");
// function e5Key() {
//     const e5sound = playSound(E5);
// }

// Keyboard function
window.addEventListener('keydown', function (s) {
    // A key
    if (s.keyCode === 65) return Key('c4');
    // W key
    if (s.keyCode === 87) return Key('db4');
    // S key
    if (s.keyCode === 83) return Key('d4');
    // E key
    if (s.keyCode === 69) return Key('eb4');
    // D key
    if (s.keyCode === 68) return Key('e4');
    // F key
    if (s.keyCode === 70) return Key('f4');
    // T key
    if (s.keyCode === 84) return Key('gb4');
    // G key
    if (s.keyCode === 71) return Key('g4');
    // Y key
    if (s.keyCode === 89) return Key('ab4');
    // H key
    if (s.keyCode === 72) return Key('a4');
    // U key
    if (s.keyCode === 85) return Key('bb4');
    // J key
    if (s.keyCode === 74) return Key('b4');
    // K key
    if (s.keyCode === 75) return Key('c5');
    // O kay
    if (s.keyCode === 79) return Key('db5');
    // L key
    if (s.keyCode === 76) return Key('d5');
    // P key
    if (s.keyCode === 80) return Key('eb5');
    // ; key
    if (s.keyCode === 186) return Key('e5');
});








