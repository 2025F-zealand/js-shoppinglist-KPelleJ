//Write your Javascript code here
console.log("Shoppinglist")



function addLi(item, itemClass){
    let getul = document.getElementById("list")
    let ulCount = getul.childElementCount

    let newLi = document.createElement("li")
    let newText = document.createTextNode(item)
    newLi.setAttribute("id", ulCount)
    newLi.setAttribute("class", itemClass)

    newLi.append(newText)
    getul.append(newLi)
}

addLi("Ford Truck", "unhealthy")
addLi("Juice", "healthy")
