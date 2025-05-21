const headerList = ["words-label","time-label","service-label","gift-label","touch-label","spicy-label"]
const sectionList = ["words","time","service","gift","touch","spicy"]

//add event listener to buttons
let headerText = document.getElementById("header")
headerText.addEventListener("click",()=>reset())

let wordButton = document.getElementById("words-label")
wordButton.addEventListener("click",()=>showSection("words","words-label"))

let timeButton = document.getElementById("time-label")
timeButton.addEventListener("click",()=>showSection("time","time-label"))

let serviceButton = document.getElementById("service-label")
serviceButton.addEventListener("click",()=>showSection("service","service-label"))

let giftButton = document.getElementById("gift-label")
giftButton.addEventListener("click",()=>showSection("gift","gift-label"))

let touchButton = document.getElementById("touch-label")
touchButton.addEventListener("click",()=>showSection("touch", "touch-label"))

let spicyButton = document.getElementById("spicy-label")
spicyButton.addEventListener("click",()=>showSection("spicy", "spicy-label"))

//adding event listeners to coupons
let couponList = document.getElementsByClassName("coupon")

for(i=0; i<couponList.length; i++){
    let coupon = couponList[i]
    let HTMLToPassOn = coupon.innerHTML
    coupon.addEventListener("click",()=>openCoupon(HTMLToPassOn))
}


function showSection(sectionToShow, headerToShow){
    console.log("showing")
    let section = document.getElementById(sectionToShow)

    let sectionClasses = section.getAttribute("class")

    if(sectionClasses.indexOf("current")>-1){
        sectionClasses = sectionClasses.replace("current", "")
        section.setAttribute("class", sectionClasses)
        section.style.display = "none"
        reset()
        return
    }

    else{
        //adding class to highlight current
        sectionClasses = sectionClasses + " current"
        section.setAttribute("class", sectionClasses)
        section.style.display = "flex"
        for(i=0; i<headerList.length; i++){
            if(headerList[i] !== headerToShow){
                let headerToHide = document.getElementById(headerList[i])
                headerToHide.style.display = "none"
            }
        }
    }
}

function reset(){
    for(i=0; i<headerList.length; i++){
        let headerToShow = document.getElementById(headerList[i])
        headerToShow.style.display = "block"
    }

    for(j=0; j<sectionList.length; j++){
        let sectionToHide = document.getElementById(sectionList[j])
        sectionToHide.style.display = "none"
    }
}

function openCoupon(innerHTMLToSet){
    let spinBackground = document.getElementById("spin-background")
    spinBackground.style.display = "block"

    innerHTMLToSet = innerHTMLToSet.replace("<p>good for one</p>", "")
    let couponToShow = document.getElementById("coupon-show")
    couponToShow.innerHTML = `<section class="redeem"><h3>Redeeming</h3></section><section class="showing">${innerHTMLToSet}</section><section class="redeem close" id="close"><h3>x</h3></section>`

    let closeButton = document.getElementById("close")
    closeButton.addEventListener("click",()=>closeCoupon())

    couponToShow.style.display = "flex"

}

function closeCoupon(){
    let spinBackground = document.getElementById("spin-background")
    spinBackground.style.display = "none"

    let couponToShow = document.getElementById("coupon-show")
    couponToShow.style.display = "none"
}