
function addRecom() {
    let recom = document.getElementById("new-recom").value
    if(recom != "" && recom.trim()!= "") {
        console.log("Message received: " +recom)

        let element = document.createElement("div")
        element.setAttribute("class", "recom")

        element.innerHTML = `\<span\>&#8220;\<\/span\> ` + recom + ` \<span\>&#8221;\<\/span\>`

        document.getElementById("all-recom").appendChild(element)

        // This is required because recom only stores the value, not the element
        document.getElementById("new-recom").value = ""
        // If we wanted to store the element, we would then have to add '.value' everywhere after recom

        document.getElementById("_name").value = ""
        showPopup(true)
        
    }
    else{
        alert("You have not entered anything")
    }
}

function showPopup(condition){
    if (condition) {
        document.getElementById("pop-up").style.visibility = 'visible'
    } else {
        document.getElementById("pop-up").style.visibility = 'hidden'
    }
}   