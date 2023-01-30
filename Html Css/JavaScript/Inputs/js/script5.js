var a = +prompt("a ededi daxil edin");
var b = +prompt("b ededi daxil edin");
var c = +prompt("c ededi daxil edin");
var sert1 = a > b && a > c;
var sert2 = b > a && b > c;
if(sert1) {
    console.log("a eded b ve c dan boyukdu")
}
else if(sert2) {
    console.log("b eded a ve c dan boyukdu")
}
else {
    console.log("c eded a ve b dan boyukdu")
}