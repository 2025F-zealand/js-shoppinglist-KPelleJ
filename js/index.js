//Write your Javascript code here
console.log("Shoppinglist")

    let getul = document.getElementById("list")
    let ulCount = getul.childElementCount

function createLi(item, itemClass){
    let newLi = document.createElement("li")
    let newText = document.createTextNode(item)

    newLi.setAttribute("class", itemClass)
    newLi.append(newText)

    return newLi
}

function addLi(id, li){
    let liToAdd = li
    liToAdd.setAttribute("id", id)

    getul.append(liToAdd)
}

let li1 =createLi("Ford Truck", "unhealthy")
let li2 = createLi("Juice", "healthy")

addLi(ulCount, li1)
addLi(ulCount, li2)
