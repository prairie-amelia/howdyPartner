let couponList = document.getElementsByClassName("coupon")
let textForInner = localStorage.getItem("inner");
let couponToShow = document.getElementById("showing")
if(couponToShow){
    couponToShow.innerHTML = `${textForInner}`
}

let mode = localStorage.getItem("mode")
let classToHide = ""
if(mode === "in-person"){
    classToHide = "long-distance-only"
}
else{
    classToHide = "in-person-only"
}

let elementsToHide = document.getElementsByClassName(classToHide)
for(i=0; i<elementsToHide.length; i++){
    let thisElement = elementsToHide[i]
    thisElement.style.display = "none"
}

for(i=0; i<couponList.length; i++){
    let coupon = couponList[i]
    let HTMLToPassOn = coupon.innerHTML
    coupon.addEventListener("click",()=>openCoupon(HTMLToPassOn))
}

function openCoupon(innerHTMLToSet){
    console.log("ran open")
    innerHTMLToSet = innerHTMLToSet.replace("<p>good for one</p>", "")
    localStorage.setItem("inner", innerHTMLToSet);
    
    window.open('redeem.html',"_self").onload = () => {
        //let couponToShow = document.getElementById("showing")
        //let textForInner = localStorage.getItem("inner");
        //console.log(textForInner)
        //couponToShow.innerHTML = `${textForInner}`
    }
}
