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


//Fibanaci tapmaq:
// function fibo(n){
//     let arr = [0, 1]
//     if (n < 2) return arr
//     for (let i = 2; i < n; i++){
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr
// }
// let n = +prompt("n ededi daxil edin: ")
// console.log(fibo(n))


//
// Input ile daxil olunan ədədin sade bolenlerini cixartsin:

// var input = prompt("Eded dahil edin :");
// var count = 0;

// for(let i = 2; i<=input; i++) {
//     reminder = input % i
//     if (reminder == 0) {
//         let prime = true
//         for (let k = 2; k<i; k++) {
//             if (i%k==0) {
//                 prime = false
//             }
//         }
//         if (prime) {
//             console.log(input, 'ededin sade bolenleri :',i)
//         }
//     }
// }

//  3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik:
// var input1 = +prompt('3 regemli eded dahil edin')
// var arr = []
// arr.push(input1)
// arr.push('3')
// arr.unshift('3')
// console.log(arr)
// console.log('areyin uzunlugu :',arr.length)

//Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın:
//  var input1 = prompt('Eded dahil edin')
//  var max1 = 0
//  while(input1 > 0){
//     var reminde = input1 %10
//     input1 = Math.trunc(input1/10)
//     if(reminde > max1){
//         max1 = reminde
//     }
//  }console.log('Ededin en boyuk regemi :',max1)

//Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin:
// var input1 = prompt('Eded dahil edin')
// console.log(input1)
// while(input1 > 0){
//     var reminde = input1 %10
//     input1 = Math.trunc(input1/10)
//     console.log('Ededin regemleri',reminde)
// }

//Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin:
// var input1 = prompt('Eded dahil edin')
// console.log(input1)
// while(input1 > 0){
//     var reminde = input1 %10
//     input1 = Math.trunc(input1/10)
//     if(reminde%2 ==0){
//         console.log('Cut ededtir',reminde)
//     }
// }

//Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin:
// var input1 = prompt('Eded dahil edin')
// console.log(input1)

// while(input1 > 0){
//     var reminde = input1 %10
//     input1 = Math.trunc(input1/10)
//     let i = 1
//     let count = 0
//     while(reminde >= i){

//         if(reminde % i ==0 ){
//             count +=1
//             i++
//         }else{
//             i++
//         }
//     }if(count < 3){
//          console.log('sade ededtir',reminde)
//     }
// }
// Input ile daxil olunan ədədin rəqəmlərindən mükəmməl ədəd olub olmadığını tapın:
// let input = prompt("Eded dahil edin");
// console.log(input);
// while (input > 0) {
//   let reminde = input % 10;
//   input = Math.trunc(input / 10);
//   let i = 1;
//   let cem = 0;
//   while (reminde > i){
//     if (reminde % i == 0){
//       cem += i;
//       i++;
//       continue
//     } else {
//       i++;
//     }

//    if (cem == reminde) {
//     console.log("Mukemel ededtir",reminde);
//   }else{
//     console.log("Mukemel eded deyil",reminde);
//   }
// }

// }

//Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın:
// let input = prompt('Eded dahil edin')
// console.log('Eded :',input)
// let arr = []
// let count =0 
// while(input > 0){
//   let reminde = input % 10;
//   count +=1
//   input = Math.trunc(input / 10);
//   arr +=reminde
// }
// console.log('Ededlerin sayi',count)
// console.log('Ededin tersi: ',arr)

//Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin:
// let derece = prompt('1-ci ededi dahil edin')
// let eded = prompt('2-ci ededi dahil edin')
// let guve = 1
// guve = eded **derece
// console.log(eded,'**',derece,'=',guve)

//Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın:
// let input = prompt('Eded dahil edin')
// let cem = 0
// while(input > 0){
//     let reminde = input % 10
//     input = Math.trunc(input/10)
//     let kvadrat = reminde**2
//     cem +=kvadrat
// }
// console.log(cem)

//Input ile daxil olunan ədədin 3 ededi string :
// let i = 0
// let arr = []
// while(i < 3){
//     let input = prompt('Eded dahil edin')
//      arr.push(input)
//     i++
// }console.log ( arr)

//Isifadeciden alinan n sayda ededden necesinin tam eded oldugunu tapin:
//   let n = prompt('n-nin qiymetini verin')  
//   let i = 0
//   let count = 0
//   while(i < n){
//     let input = prompt('eded dahil edin')
//     let reminde = input % 1
//     if (reminde==0){
//         count+=1
//         i++
//     }else{
//         i++
//     }
//   }
// console.log('Tam ededlerin sayi :',count)

//Isifadeciden alinan n sayda ededden necesinin sade eded oldugunu tapin:

//   let n = prompt('n-nin qiymetini verin')  
//    let k = 0

//   for (let i = 0; i < n ; i++){

//     let input = prompt('eded dahil edin')
//     let count = 0   
//     for(let j = 1; j <= input; j++){

//         let reminde = input % j

//         if(reminde==0){
//             count+=1
//         }
//     }
//     if(count < 3 && count!=1){
//        console.log('sade ededtir',input)
//        k+=1


//     }
//   }  
//   console.log('Sade ededlerin sayi',k)

//Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin:

//   let n = prompt('n-nin qiymetini verin')  
//    let k = 0

// for (let i = 0 ; i < n ; i ++){
//      let cem1= 0
//     let input = prompt('Eded dahil edin')
//     for ( let j = 1; j < input; j++){

//         let reminde = input% j
//         if (reminde==0){
//             cem1+=j
//         }
//     }if(input==cem1){
//         console.log('Mukemel ededtir',input)
//         k+=1
//     }
// }
// console.log('Mukemel ededlerin sayi',k)

//Input ile daxil olunan ededden sonraki ilk sade ededi tapin:

// let a = +prompt('Eded dahil ed')
// let count = 0
// console.log('input :',a)
// while(count !== 2){
//     a = a +1

//     for(let i = 1;i<=a;i++){
//     let reminde = a %i    
//     if (reminde==0){
//         count+=1
//     }
// }
// if(count < 3){
//     console.log('inputan sonraki sade eded :',a)
// }else{
//  count = 0
// }
// }

//Istifadecinin daxil etdiyi ededin kok altini tap:

// let input = prompt('Eded dahil edin')

// let reminde = input**0.5

// console.log('Ededin kok alti',reminde)

// task 18 Istifadeci 0 daxil edenedek edelerin cemini tapin.

// let cem1 = 0
// while(input !=0){
//      var input = +prompt('eded dahil edin')
//     cem1 +=input
// }
// console.log('input ile dahil olan ededlerin cemi: ',cem1)

//Input  daxil olunan 3 ededden ortancili tapan funksiya yazin:
// let cem = 0
// for(let i = 0; i < 3 ; i++){
//   var input = +prompt('Eded dahil edin')
//   cem +=input
//   console.log('Dahil olunan eded:',input)
// }
// console.log('dahil olunan ededleri cemi', cem)
// let orta = Math.trunc(cem/3)
// console.log('Dahil olunan 3 ededin ortalamasinin tam hisesi :',orta)
// let reminde = cem % 3
// console.log('Dahil olunan 3 ededin ortalamasinin qalig hisesi :',reminde)


//Istifadeci 0 daxil edenedek ededleri arrayda goster (while):
// let arr=[]
// let n = +prompt('ededleri sayi daxil edin: ')
// let i = 1 
// while(i<=n){
//     i++ 
//     let x = prompt('elementleri daxil edin: ')
//     if(x!=0){
//         arr.push(x)
//     }
// }
// console.log(arr)


//Arrayda m herfi ile biten sozleri cixardin:
// const arr=[]
// let z = +prompt('ededleri sayi daxil edin: ')
// let x = 1 
// while(x<=z){
//     x++ 
//     let z = prompt('elementleri daxil edin: ')
//     arr.push(z)
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i].at(-1)==='m'){
//         console.log(arr[i])
//     }
//     if (arr[i][arr[i].length-1]==='m'){
//         console.log(arr[i])
//     }
// }


//Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse-- false ekrana gostersin:
// let arr=[]
// let n = +prompt('ededleri sayi daxil edin: ')
// let cum = 0
// let i = 1 
// while(i<=n){
//     i++ 
//     let x = +prompt('elementleri daxil edin: ')
//     arr.push(x)
//     cum=cum+x
// }
// console.log(arr)
// console.log(cum)
// if(cum%2==0){
//     console.log('Ededleri cume: ' + true)
// }
// else {
//     console.log('Ededleri cume: '+ false)
// }


// const arr=[]
// let n = +prompt('ededleri sayi daxil edin: ')
// let x = 1 
// while(x<=n){
//     x++ 
//     let z = +prompt('elementleri daxil edin: ')
//     arr.push(z)
//     while(z!=0){
//         reminder=z%10
//         z=Math.trunc(z/10)
//         console.log(reminder)
//     }
// }
// console.log(arr)


//Array icerisindeki ən böyük ən kiçik ədədin tapılması:
// const arr=[]
// let z = +prompt('ededleri sayi daxil edin: ')
// let x = 1 
// while(x<=z){
//     x++ 
//     let z = +prompt('elementleri daxil edin: ')
//     arr.push(z)
// }
// console.log(arr)
// console.log('Max: ' + Math.max(...arr))
// console.log('Min: ' + Math.min(...arr))

// Recursive Binery Search:

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


// let arr = [13,54,67,12,99]
// let random = []
// let cnt = 0
// let counter = 0

// while(cnt < arr.length) {
//   let ind = Math.ceil(100*Math.random())
//   if (!random.includes(ind)) {
//     random.push(ind)
//     cnt++
//   }
// }
// console.log(random)
// random.map(item1 => {
//   arr.map(item2 => {
//     if(item1 == item2) {
//       counter++
//     }
//   })
// })
// console.log(counter)


// function fibo(n){
//     if(n<2){
//         return n
//     }
//     else{
//         console.log(fibo(n-1) + fibo(n-2))
//         return  (fibo(n-1) + fibo(n-2))
//     }
    
// }
// console.log(fibo(3))




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

// arr.map(x=> upper(x))


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

// 10)Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin
// let arr = []
//     let arr2 = [0,1,2,3,4,5,6,7,8,9]
//         let i = 0
//         while(i < 9){
//             let input = prompt('0 - 9 ededleri daxil edin: ')
//             arr.push(input)
//             i++
//         }
// function check (array1, array2){
//   array1.map(x => {
//     let different = true
//     array2.map(k => {
//       if (x == k) {
//         different = false
//       }
//     })
//     if (different) {
//       console.log(x)
//     }
//   })
// }
// check(arr,arr2)
// check(arr2,arr)

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
// SetTimeesout() asinxron funksiyadir ona goreki, anca ozunu ayrilidir

// 25)Hansı method arrayı string’e çevirir?
// array.toString() ve array.toLocaleString
// length ile array.lenght
// array.toLocaleString isdedirix oz metodlarandan ve ',' arralyir
// let arr = [3,4,true]
// console.log(arr.length)
// console.log( typeof arr.toString())
