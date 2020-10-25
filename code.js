// setTimeout(() => {
//   let music = new Audio("music.mp3");
//   console.log(music);
//   music.play();
// }, 1000);
// просто пример музыки, которая вызывается через некоторая
// ТУТ У НАС БЫЛО НА callback
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.appendChild(script);
// }
// loadScript("my_code.js", () => {
//   newFunction();
// });
//Давайте перепишем на Promise

// function loadScript(src) {
//     return new Promise(function(resolve, reject){
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error);
//         document.head.appendChild(script);
//     })
// }
// let promise = loadScript("my_code.js")

// promise.then(
//     script => newFunction(),
//     error => alert("Мы не смогли загрузить инфу, что поделаешь!")
// )


