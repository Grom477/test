const lamp = document.querySelector("#lamp");
console.log(lamp.src);
let on= "http://127.0.0.1:5500/Html%20Css/JavaScript/Inputs/img/lamp1.png"
let of= "http://127.0.0.1:5500/Html%20Css/JavaScript/Inputs/img/lamp2.png"
lamp.addEventListener("click",() =>{
    if(lamp.src===on){
        lamp.src=of;
    }
    else {lamp.src=on;
    }
})


// const lamp = document.querySelector("#lamp");
// console.log(lamp.src)
// let on="img/lamp1.png"
// let of= "img/lamp2.png"
// let toggle = false
// lamp.addEventListener("click",() =>{
//     if(toggle){
//         lamp.src=on;
//         toggle = false
//     }
//     else {
//         toggle = true
//         lamp.src=of;
//     }
// })