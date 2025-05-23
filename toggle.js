let toggle = document.getElementById("mode-toggle")
toggle.addEventListener("click",()=>switchMode())

setMode()

function setMode(){
    let modeCheck = localStorage.getItem("mode");

    console.log(modeCheck)
    if(!modeCheck){
        localStorage.setItem("mode", "in-person");
        modeCheck = "in-person"
    }
    
    if(modeCheck === "in-person"){
        let inPerson = document.getElementById("in-person")
        inPerson.setAttribute("class", " selection")
    }
    else{
        let longDistance = document.getElementById("long-distance")
        longDistance.setAttribute("class", " selection")
    }
}

function switchMode(){
    let inPerson = document.getElementById("in-person")
    let longDistance = document.getElementById("long-distance")

    let inPersonClass = inPerson.getAttribute("class")
    let longDistanceClass = longDistance.getAttribute("class")

    if(inPersonClass && inPersonClass.indexOf("selection") >-1){
        inPersonClass = inPersonClass.replace("selection","")
        longDistanceClass = longDistanceClass + " selection"

        inPerson.setAttribute("class", inPersonClass)
        longDistance.setAttribute("class", longDistanceClass)
        localStorage.setItem("mode", "long-distance");
    }
    else{
        inPersonClass = inPersonClass + " selection"
        longDistanceClass = longDistanceClass.replace("selection","")

        inPerson.setAttribute("class", inPersonClass)
        longDistance.setAttribute("class", longDistanceClass)
        localStorage.setItem("mode", "in-person");
    }
}