//10-200 arasinda ededlerin 3 qatinin 2 eded artigin 5-e bolunen ededleri gosterin:
// for(i=10;i<=200;i++){
//     let reminder = (i*3+2)%5
//     if(reminder==0){
//         console.log(i)
//     }
// }


//1-100 arasinda cut ededleri toplamasi: 
// let topla = 0
// for(let i = 1; i <= 100;i++){
//     let reminder = i % 2
//     if(reminder==0){
//         topla+=i
//     }
// }
// console.log(topla)


//1-100 arasinda cut ededleri toplamasi mukemmel eded olmagini tapin:
// let cemi1=0
// let cemi2=0
// for(let i=1;i<=100;i++){
//     let reminder = i%2
//     if(reminder==0){
//         cemi1+=i
//     }
// }
// for(let i=1;i<=cemi1;i++){
//     let reminder=cemi1%i
//     if(reminder==0){
//         cemi2+=i
//     }
// }
// console.log('Mukemel eded deyil'+ cemi1==cemi2)


//Input 5 eded daxil edin ve 7-bolune olanlari sayini tapin
// let count = 0
// for (let i = 0; i < 5; i++) {
//     let a = +prompt("a ededi daxil edin: ")
//     let reminder = a % 7
//     if (reminder == 0) {
//         count++
//         console.log(a)
//     }
// }
// console.log("7-ya tam bolunen ededler: " + count)


// Input ededleri bolenleri sayini tapin:
// let a = +prompt("a ededi daxil edin: ")
// let count = 0
// for (let i = 1; i <= a; i++) {
//     if(a%i==0){
//         count++
//         console.log(i)
//     }
// }
// console.log("counter: " + count)


// Input ededleri bolenleri tapin:
// let a = +prompt("a ededi daxil edin: ")
// for (let i = 1; i <= a; i++) {
//     if(a%i==0){
//         console.log(i)
//     }
// }


//Input ededleri bolenleri cemini tapin:
// let a = +prompt("a ededi daxil edin: ")
// let cemi = 0
// for (let i = 1; i <= a; i++) {
//     if(a%i==0){
//         cemi+=i
//         console.log(i)
//     }
// }
// console.log("cemi: " + cemi)


//Input ededleri bolenleri hasilini tapin:
// let a = +prompt("a ededi daxil edin: ")
// let hasili = 1
// for (let i = 1; i <= a; i++) {
//     if(a%i==0){
//         hasili*=i
//         console.log(i)
//     }
// }
// console.log("hasili: " + hasili)


//Input ededin nece reqemli oldugunu tapin:
// let a = +prompt("a ededi daxil edin: ")
// let count = 0
// while (a > 0) {
//     let reminder = a % 10
//     a = Math.trunc(a / 10)
//     count++
//     console.log(reminder)
// }
// console.log("counter: " + count)


//Input ededin nece reqemli oldugunu cemi tapin:
// let a = +prompt("a ededi daxil edin: ")
// let count = 0
// let cemi = 0
// while (a > 0) {
//     let reminder = a % 10
//     a = Math.trunc(a / 10)
//     cemi += reminder
//     count++
//     console.log(reminder)
// }
// console.log("cemi: " + cemi)
// console.log("counter: " + count)


//Input ededin nece reqemli oldugunu hasilini tapin:
// let a = +prompt("a ededi daxil edin: ")
// let count = 0
// let hasili = 1
// while (a > 0) {
//     let reminder = a % 10
//     a = Math.trunc(a / 10)
//     hasili *= reminder
//     count++
//     console.log(reminder)
// }
// console.log("hasili: " + hasili)
// console.log("counter: " + count)


//Input ededi sade yoxsa murekkeb oldugunu tapin:
// let a = +prompt("a ededi daxil edin: ")
// let count = 0
// for (let i = 1; i <= a; i++) {
//     if (x / i == 1 && x / i == a) {
//         console.log("sade: " + x)
//     } else {
//         console.log("murekkeb: " + i)
//     }
// }
// console.log("counter: " + count)


// Input ededlerden sade ve murrekebi oldugunu tapin : 
// const a = +prompt("a ededi daxil edin: ")
// let sade = true 
// for (let i = 2; i < a; i++) {
//   if(a % i == 0) {
//     sade = false
//   }
// }
// if(a==1){
//   console.log("Sade ve murekkeb deyil")
// }
// else{
//   console.log("Sadedi: " + sade)
// }

