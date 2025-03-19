//Write your Javascript code here
console.log("Shoppinglist")

    let getul = document.getElementById("list")

function createLi(item, itemClass){
    let newLi = document.createElement("li")
    let newText = document.createTextNode(item)

    newLi.setAttribute("class", itemClass)
    newLi.append(newText)

    return newLi
}

function addLi(li){
    let liToAdd = li
    let id = getul.childElementCount

    liToAdd.setAttribute("id", id)

    getul.append(liToAdd)
}

function changeClass(id, itemClass){
    let liToChange = document.getElementById(id)

    liToChange.setAttribute("class", itemClass)
}

let li1 = createLi("Ford Truck", "unhealthy")
let li2 = createLi("Juice", "healthy")

addLi(li1)
addLi(li2)

changeClass(3, "pisskriss")
