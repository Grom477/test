/////// dataFilter ////////

const nav = [{
    id: 'All Products',
    num: '1'
},
{
    id: 'Women',
    num: '2'
},
{
    id: 'Men',
    num: '3'
},
{
    id: 'Bag',
    num: '4'
},
{
    id: 'Shoes',
    num: '5'
},
{
    id: 'Watches',
    num: '6'
}
];

///////

const data = [{
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg',
    text: 'Esprit Ruffle Shirt',
    price: "$16.64",
    id: 'Women'

},
{
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-02.jpg',
    text: 'Herschel supply',
    price: "$35.31",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-03.jpg',
    text: 'Only Check Trouser',
    price: "$25.50",
    id: 'Men'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-04.jpg',
    text: 'Classic Trench Coat',
    price: "$75.00",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-05.jpg',
    text: 'Front Pocket Jumper',
    price: "$34.75",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-06.jpg',
    text: 'Vintage Inspired Classic',
    price: "$93.20",
    id: 'Watches'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-07.jpg',
    text: 'Shirt in Stretch Cotton',
    price: "$52.66",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-08.jpg',
    text: 'Pieces Metallic Printed',
    price: "$18.96",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-09.jpg',
    text: 'Converse All Star Hi Plimsolls',
    price: "$75.00",
    id: 'Shoes'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-10.jpg',
    text: 'Femme T-Shirt In Stripe',
    price: "$25.85",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-11.jpg',
    text: 'Herschel supply',
    price: "$63.16",
    id: 'Men'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-12.jpg',
    text: 'Herschel supply',
    price: "$63.15",
    id: 'Men'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-13.jpg',
    text: 'T-Shirt with Sleeve',
    price: "$18.49",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-14.jpg',
    text: 'Pretty Little Thing',
    price: "$54.79",
    id: 'Women'

}, {
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-15.jpg',
    text: 'Mini Silver Mesh Watch',
    price: "$86.85",
    id: 'Watches'

},
{
    url: 'https://preview.colorlib.com/theme/cozastore/images/product-16.jpg',
    text: 'Square Neck Back',
    price: "$29.64",
    id: 'Women'

},
]
let filterContent = data
let liked = []
const cardsCountener = document.querySelector('.product_carts')
const createProduct = () =>{
cardsCountener.innerHTML = ""
filterContent.map((data) => {
const countener = document.createElement('div')
countener.classList.add('product__box')
const quick = document.createElement('div')
quick.classList.add('quick')
const quickBtn = document.createElement('button')
quickBtn.classList.add('quick__btn')
quickBtn.classList.add("slide-in-bottom3")
quick.append(quickBtn)
const quickBtnText = document.createElement('p')
quickBtnText.classList.add('quick__btn-text')
quickBtnText.textContent = 'Quick View'
quickBtn.append(quickBtnText)
const productImg = document.createElement('div')
productImg.classList.add('productImg')
const img = document.createElement('img')
img.src = data.url
img.classList.add('product__box-image')
productImg.append(img)
productImg.append(quick)
const p1 = document.createElement('p')
p1.textContent = data.text
p1.classList.add('product__box-title')
const p2 = document.createElement('p')
p2.textContent = data.price
p2.classList.add('product__box-price')
const a = document.createElement('a')
a.classList.add('product__box-icon')
const i1 = document.createElement('img')
i1.addEventListener('click', e=> {
    if(!liked.includes(data)){
        liked.push(data)
    console.log(liked);
    }
    else {
        console.log('artiq var');
    }
})
i1.classList.add('product__box-heart1')
i1.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-01.png'
a.append(i1)
const i2 =document.createElement('img')
i2.classList.add('product__box-heart2')
i2.classList.add('hidden')
i2.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-02.png'
a.append(i2)
countener.append(productImg)
countener.append(p1)
countener.append(p2)
countener.append(a)
cardsCountener.append(countener)

})
}
createProduct();

////
const productLists = document.querySelector('.product__lists');
const ul = document.createElement('ul');
ul.classList.add('product__list');
nav.map((nav)=>{
const li = document.createElement('li');
li.classList.add('product__list-info');
li.textContent = nav.id
ul.append(li)
productLists.append(ul);
li.addEventListener('click',()=>{
if(nav.id == 'All Products'){
    filterContent = data
    createProduct()

}else{
    filterContent = data.filter((x)=> x.id == nav.id)
    createProduct()
}
})

})

/////// dataFilter ////////


const pict = document.querySelectorAll(".con");
const nextBtn = document.querySelector(".fa-caret-right")
const prevBtn = document.querySelector(".fa-caret-left")
const header = document.querySelector("header")


let i = 0;
pict[i].style.display = "block";
len = pict.length;
setInterval(() => {
    if (i > len - 1) {
        i = 0
    } else ++i;
    pict[i].style.display = "block";
    pict[i == 0 ? len - 1 : i - 1].style.display = "none";
}, 5000);

nextBtn.addEventListener("click", () => {
    if (i > len - 1) {
        i = 0
    } else {
        ++i
    };
    pict[i].style.display = "block";
    pict[i == 0 ? len - 1 : i - 1].style.display = "none";
})


prevBtn.addEventListener("click", () => {
    if (i < 1) {
        i = len - 1
    } else {
        --i
    };
    console.log(i)
    pict[i].style.display = "block";
    pict[i == len-1 ? 0 : i + 1].style.display = "none";

})

////

window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
        header.style.background = 'white'
        header.style.transition = 'all linear .35s'
    } else {
        header.style.background = 'transparent'
        header.style.transition = 'all linear .35s'
    }
})

////


const shopBag = document.querySelector(".shopBag")
const shopIcon = document.querySelector(".fa-cart-shopping")
const shopClose = document.querySelector(".containers__icon")
const shopBagOverlay = document.querySelector(".shopBag__overlay")

shopIcon.addEventListener("click", () => {
    shopBag.classList.toggle("transformX")
})
shopClose.addEventListener("click", () => {
    shopBag.classList.toggle("transformX")
})
shopBagOverlay.addEventListener("click", () => {
    shopBag.classList.toggle("transformX")
})
///

const heart1 = document.querySelector(".product__box-heart1")
const heart2 = document.querySelector(".product__box-heart2")


heart1.addEventListener("click", () =>{
    heart2.classList.remove("hidden")
    heart1.classList.add("hidden")

})

heart2.addEventListener("click", () =>{
    heart1.classList.remove("hidden")
    heart2.classList.add("hidden")
})

///

const searchIcon = document.querySelector(".fa-magnifying-glass")
const search = document.querySelector(".search")
const searchClose = document.querySelector(".search__close-icon")
const searchOverlay = document.querySelector(".search__overlay")

searchIcon.addEventListener("click", () => {
    search.classList.toggle("transformY")
})
searchClose.addEventListener("click", () => {
    search.classList.toggle("transformY")
})
searchOverlay.addEventListener("click", () => {
    search.classList.toggle("transformY")
})


const quickBtn = document.querySelector(".quick__btn")
const pop = document.querySelector(".pop")
const popOverlay = document.querySelector(".pop__overlay")
quickBtn.addEventListener("click", ()=> {
    pop.classList.remove("hidden")
    popOverlay.classList.remove('hidden')
})
popOverlay.addEventListener("click", () => {
    pop.classList.add("hidden")
    popOverlay.classList.add("hidden")
})

////

