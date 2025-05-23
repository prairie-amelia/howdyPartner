//from https://lingojam.com/TextToEmojiLetters
const letterConvert1 = {"A":"𝔸", "B":"𝔹","C":"ℂ","D":"𝔻", "E":"𝔼","F":"𝔽",
"G":"𝔾", "H":"ℍ","I":"𝕀","J":"𝕁", "K":"𝕂","L":"𝕃","M":"𝕄", "N":"ℕ","O":"𝕆",
"P":"ℙ", "Q":"ℚ","R":"ℝ", "S":"𝕊", "T":"𝕋","U":"𝕌","V":"𝕍", "W":"𝕎","X":"𝕏",
"Y":"𝕐", "Z":"ℤ"}

const letterConvert = {"A":"a", "B":"b","C":"c","D":"d", "E":"e","F":"f",
"G":"g", "H":"h","I":"i","J":"j", "K":"k","L":"l","M":"m", "N":"n","O":"o",
"P":"p", "Q":"q","R":"r", "S":"s", "T":"t","U":"u","V":"v", "W":"w","X":"x",
"Y":"y", "Z":"z"}

const heartConvert = {"words":"💜","time":"💙","service":"💚","gift":"💛", "touch":"🧡","spicy":"❤️"}

let couponList = document.getElementsByClassName("coupon")
let textForInner = localStorage.getItem("inner");
let couponToShow = document.getElementById("showing")

let textForCopy = textForInner.trim()
let startReplace = textForCopy.indexOf("<h3>")
let endReplace = textForCopy.indexOf("</h3>")
let startOfP = textForCopy.indexOf('<p class="description">')

textForCopy = textForCopy.substring(0,endReplace+5)+textForCopy.substring(startOfP)

textForCopy = textForCopy.replace('<p class="description">',"\n*")
textForCopy = textForCopy.replace('</p>',"*")

for(i=startReplace+4; i<textForCopy.length; i++){
    let letter = textForCopy[i]
    if(letter ==="<" && textForCopy[i+1] === "/" && textForCopy[i+2] === "h" && textForCopy[i+3].toString() === "3" && textForCopy[i+4] === ">"){
        break
    }
    letter = letter.toUpperCase()
    let newLetter = letterConvert1[letter]
    if(newLetter){
        textForCopy = textForCopy.substring(0,i) + newLetter + textForCopy.substring(i+1)
    }
}

textForCopy = "Redeeming...\n\n" + textForCopy

let loveType = localStorage.getItem("type")
if(!loveType){
    loveType = "spicy"
}

let heartType = heartConvert[loveType]

textForCopy = textForCopy.replace("<h3>",`${heartType} `)
textForCopy = textForCopy.replace("</h3>",` ${heartType}`)

textForCopy = textForCopy + "\n\n-sent from Coupon Book-"

localStorage.setItem("share", textForCopy)

console.log(textForCopy)

if(couponToShow){
    couponToShow.innerHTML = `${textForInner} <section class="button-set"><button class="share">Share</button><button class="copy">Copy</button></section>`
    let copyButtons = document.getElementsByClassName("copy")
    let shareButtons = document.getElementsByClassName("share")

    for(i = 0; i <copyButtons.length; i++){
        let button = copyButtons[i]
        button.addEventListener("click",()=>copyCoupon())
    }

    for(i = 0; i <shareButtons.length; i++){
        let button = shareButtons[i]
        button.addEventListener("click",()=>shareCoupon())
    }
}

function copyCoupon(){
    let message = localStorage.getItem("share")
    navigator.clipboard.writeText(message)
    //alert("copied to your clipboard")
}

function shareCoupon(){
    let message = localStorage.getItem("share")
    navigator.share({text: message})
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