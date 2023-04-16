// font-family: 'Alegreya', serif;
// font-family: 'Alice', serif;
// font-family: 'Arapey', serif;
// font-family: 'Aref Ruqaa', serif;
// font-family: 'Cantata One', serif;
// font-family: 'Domine', serif;
// font-family: 'Droid Serif', serif;
// font-family: 'Gentium Basic', serif;
// font-family: 'Libre Baskerville', serif;
// font-family: 'Lora', serif;
// font-family: 'Merriweather', serif;
// font-family: 'Old Standard TT', serif;
// font-family: 'Oranienbaum', serif;
// font-family: 'Prata', serif;
// font-family: 'Rufina', serif;
// font-family: 'Vidaloka', serif;
// font-family: 'Bentham', serif;
// font-family: 'Saira Extra Condensed', sans-serif;
// font-family: 'Saira', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Saira Condensed', sans-serif;
// font-family: 'Titillium Web', sans-serif;
// font-family: 'Quicksand', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Abel', sans-serif;
// font-family: 'Ruluko', sans-serif;
// font-family: 'Rum Raisin', sans-serif;
// font-family: 'Snippet', sans-serif;
// font-family: 'Chathura', sans-serif;
// font-family: 'Text Me One', sans-serif;
// font-family: 'Sansita', sans-serif;
// font-family: 'Wire One', sans-serif;
// font-family: 'Marvel', sans-serif;
// font-family: 'Bubbler One', sans-serif;
// font-family: 'Advent Pro', sans-serif;
// font-family: 'Amaranth', sans-serif;
// font-family: 'Convergence', sans-serif;

var linkattr = document.querySelector('#linkattr')
var attr = document.querySelector('#attr')

var linkshop = document.querySelector('#linkshop')
var shopping = document.querySelector('#shopping')

var linkfood = document.querySelector('#linkfood')
var food = document.querySelector('#food')


function heightToTop(ele){
    //ele为指定跳转到该位置的DOM节点
    let bridge = ele;
    let root = document.body;
    let height = 0;
    do{
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    }while(bridge !== root)
 
    return height;
}
//按钮点击时
linkattr.addEventListener('click',function(){
    window.scrollTo({
        top:heightToTop(attr),
        behavior:'smooth'
    })
})

linkshop.addEventListener('click',function(){
    window.scrollTo({
        top:heightToTop(shopping),
        behavior:'smooth'
    })
})

linkfood.addEventListener('click',function(){
    window.scrollTo({
        top:heightToTop(food),
        behavior:'smooth'
    })
})