//Write your Javascript code here
console.log("Shoppinglist")

    let getul = document.getElementById("listHealthy")
    let getUnhealthyList = document.getElementById("listUnhealthy")
    let addButton = document.getElementById("addItemBTN")

addButton.addEventListener("click", () =>{
    let item = document.getElementById("addItemInput").value
    let itemClass = document.getElementById("foodClass").value

    let newLi = createLi(item, itemClass)

    addLi(newLi)

    let itemInput = document.getElementById("addItemInput")
    itemInput.value = ""
})

function createLi(item, itemClass){
    let newLi = document.createElement("li")
    let newText = document.createTextNode(item)

    newLi.setAttribute("class", itemClass)
    newLi.append(newText)

    return newLi
}

function addLi(li){
    let liToAdd = li
    let id = getCount()
    let itemClass = li.getAttribute("class")

    liToAdd.setAttribute("id", id)

    if(itemClass == "healthy")
    {
        getul.append(liToAdd)
    }
    else
    {
        getUnhealthyList.append(liToAdd)
    }
}

function changeClass(id, itemClass){
    let liToChange = document.getElementById(id)

    liToChange.setAttribute("class", itemClass)
}

function deleteLi(id){
    let liToDelete = document.getElementById(id)

    if(liToDelete != null)
    {
    getul.removeChild(liToDelete)
    }
}

function changeText(id, text){
    let liToChange = document.getElementById(id)

    liToChange.textContent = text
}

function getCount(){
    let lastID = parseInt(getul.lastElementChild.getAttribute("id"))
    return lastID+1
}