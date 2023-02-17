
// 3)Arraydaki sadə ədədləri göstərin
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

// 11)Daxil olunan  stiringin ilk hərfini böyüyə çevir
// let eded1 = 'salam'
// let eded2 = ''
// eded2+=eded1.charAt(0).toUpperCase() + eded1.slice(1)
// console.log(eded2)

// 15)Fibonacci sequence-ni recursion ile edin 
// n = +prompt('elementi daxil edin: ')
// function fibo(n){
//     if(n<2){
//         return 1
//     }
//     else{
//         return  (fibo(n-1) + fibo(n-2))
//     }
// }
// console.log(fibo(n))


// 1)Prompdan daxil olan ədədin faktorialini tapin
// n = +prompt('elementi daxil edin: ')
// function factorial(n){
//     if(n==0){
//         return 1
//     }else{
//     return (n*factorial(n-1))
//     }
// }
// console.log(factorial(n))

// 2)Arrayin içərisindəkiləri kiçikdən böyüyə göstərin
// let text = 'menin adin amin'
// let arr = text.split(' ')
// const upper = (word) => {
//     console.log (word.charAt(0).toUpperCase() + word.slice(1))
// }

// arr.map(a=> upper(a))

// 6)Verilən cümlədə bütün sözlerin baş hərfini böyüdün


// 4)Stringdə olan saitleri ve onlarin sayini tapin
// let y
//   function display (b){
//     let count = 0
//      y = ['a','e','o','i','u']
//     for(let x of b.toLowerCase()){
//       if(y.includes(x)){
//         count +=1
//         console.log(x)
//       }
//     }
//       console.log('Saitler ',count)         
//   }
// display('Men bakiXanovda yawayiram')

// 5)Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin
// let arr = [];
// let b = 0
// function boyuk(text){
//   let n = prompt('Masiv de nece element olacaq: ')
// while (b < n ){
//   let a = prompt('eded');
//   text.push(a)
//   b++
// }
// console.log(text)
// var m = Math.max(...text);
// console.log('En boyuk element: ',m)
// }
// boyuk(arr)

// 7)Verilən ədəddən sonraki ilk sade ədədi tapin
// let a = +prompt('Eded dahil ed')
// let count = 0
// console.log('Eded :',a)
// while(count !== 2){
//     a = a +1

//     for (let i = 1;i<=a;i++){
//     let reminde = a %i    
//     if (reminde==0){
//         count+=1
//     }
// }
// if(count < 3){
//     console.log('Next eded sade :',a)
// }else{
//  count = 0
// }
// }

// 8)Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin
// let n = prompt('n daxil edin:')
// let j = 0
// let arr = []
//   let i = 0
// let count = 0
// while(j < n){
//   let input = prompt('Masiv de ededler(n) dahil edin')
//   arr.push(input)
//   j++
// }
// while(i < arr.length){
//   let reminde = arr[i]%10  
//   if(+reminde == 9 ){
//     count +=1
//     i++    
//   }
//   else{
//     i++
//   }
// }
// console.log(arr)
// console.log('Axrinci 9 biten ededler: ',count)
// if(count >=1){
//   console.log(true)
// }else{
//   console.log(false)
// }

// 9)Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin
// var arr = []
// let say1 = 0;
// let j =0
// function cut(array){
//   let n = prompt('Masiv de ededler dahil edin')
//   while(j < n){
//   let input = prompt('Ededi dahil edin')
//   array.push(input)
//   j++
// }
// for(let i = 0; i <= array.length -1; i++){
//  let reminde = array[i] % 2
//   if (reminde == 0){
//     say1 +=1
//   }
// }
//   console.log(array)
//     console.log('Cut ededler:',say1)
// if(say1>=1){
//   console.log('Cut eded var :',true)
// }else{
// console.log('Cut eded var :',false)
// }
// }
// cut(arr)


// 12)Arrayda forla ədədləri 5 vahid artirmaq
// var arr = [37,22,17,91]
// for(let a of arr){
   
//   console.log(`${a} + 5  =>`,a + 5)
//   var c = a + 5
//   arr = arr.concat(c)
// }
// console.log('Axrinci arr',arr)


// 16)ES6 ve ondan sonrakilar nədir?

// Bu teze dovrdi ve teze imkanlar JavaScript proqramirovaniyada, ve 2006 ilden bu dovr iwdiyir(2006 ilde yaraladiyib) ECMAScript
// 2005 ilin sonra(ES5) forEach ve map yaradilar

// 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
// Closure funksiya adi funksuya kimi iwtiyir amma bir nece funksayalarnan bir yerde iwteye biler
// Misal:
// random.map(item1 => {
//   arr.map(item2 => {
//     if(item1 == item2) {
//      console.log(random)
// Basqa funksayalarnan kontaklamaq ucun , bu symbol => istifade eliyir

//18)Hoisting dedikdə nə başa düşürsüz?

// Bu Javascript mexanizm di, harda evvelde funksiya axtarir duzgun ardiciligi ve sonra kodu ceverilir

// a = 5 - bu axtarir birinci var a
// var a
// console.log(a)

// 19)HOF nəyə deyilir?

// HOF(Higher order function) - funksiya , argument kimi basqa funksuya goturur ve qayadir onu 

// 20)Callback nədir?
// Callback - ele funksiyadi icrasını bitirdikdən sonra yerinə yetiriləcək funksiyadır


// 21)Data types neçə dənədir və hansılardır?

// String - "salam"
// Number - 20
// Boolen - true, false
// Object - obj{
                // key: value
                // }
// Symbol -  'eded'
// Null
// Underfined


// 22)Let ve const fərqi nələrdir?

// Let verir varuable ya yenilemek amma bir defe
// Const da vermir yenilemek va yaziliwi deyiwmek varuable da olmaz

// let a = 5
// a = 6 
// console.log(a) // isdeyecey

// const a = 5
// a = 6
// console.log(a) // error verecey


// 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?

// Recursiya - ele termindi, oz ozuvu verilir ve daha qisa formada algoritmi gorsedir amma mentiqi bawa duwmek ucun daha cetinliqdi
// Recursiyada if, else yaziriq ki sonsuz algoritm olmasin ve duzgun algoritm yazmaq ucun onlari yazmaq mumkundur

//Recursiya misali:
// n = +prompt('elementi daxil edin: ')
// function factorial(n){
//     if(n==0){
//         return 1
//     }else{
//     return (n*factorial(n-1))
//     }
// }
// console.log(factorial(n))

// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
// SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
// SetTimeesout() asinxron funksiyadir ona goreki, anca ozunu ayrilidir
// SetTimesOut() - hansi funksiya iwteyende o kodu stoplayir ve axirda iwtemey bawliyir

// function timeCode(){
//     console.log('Salam')
// }
// setTimeout(timeCode, 5000)
// Bu code da timeout 5s var ona gore 'Salam' 5s sora ekrana ceverilir(console.log)

// 25)Hansı method arrayı string’e çevirir?
// array.toString() ve array.toLocaleString
// length ile array.lenght
// array.toLocaleString isdedirix oz metodlarandan ve ',' arralyir
// let arr = [3,4,true]
// console.log(arr.length)
// console.log( typeof arr.toString())


// 26)forEach ve map arasindaki ferq ?
// forEach ve map ferqi var ki, map React da daha cox iwtedir
// map da olar vermek varuable kimi ve duzgun iwdeyecek, amma forEach error verecek
// Misal:
// let array = ['amin','rauf']
// let x = array.map(x => (x=array.tuUpperCase()))
// Eger biz forEach yazarix bize error verecek
// let array = ['amin','rauf']
// let x = array.forEach(x => (x=array.tuUpperCase()))

// 27) O(log n) nece teying olunur ? 
// o binerySearch di ve gosterir bize sureti 'log n' 
// Sortirovka da iwtedirix:
// Bubble Sort
// Quick Sort
// Shall Sort ve elave
// Misal:
// function recursiveBinerySearch(arr, target) {
//     return binerySearch(arr, target, 0, arr.length - 1)
// }
// function binerySearch(arr, target, leftIndex, rightIndex) {
//     while (leftIndex <= rightIndex) {
//         let midIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (arr[midIndex] < target) {
//             return binerySearch(arr, target, midIndex + 1, rightIndex)
//         } else if (arr[midIndex] > target) {
//             return binerySearch(arr, target, leftIndex, midIndex - 1)
//         } else {
//             return midIndex
//         }
//     }
//     return -1
// }
// const arr = [2, 4, 8, 13, 27, 45]
// console.log(recursiveBinerySearch(arr, 45))

// 28) “Hello my friend. How are you ?” bu cumlede en cox istifade olunan her ve ya herifleri ekranda gosterin
// let words = 'Hello my friend. How are you ?'
// let letters = words.split('')
// let list = []

// letters.map(x=> {
//     if (!list.includes(x)){
//         list.push(x)
//     }
// })
// list.map(a => {
//     if(letters.filter(b=> a==b).length > 2){
//         console.log(a)
//     }
// })
