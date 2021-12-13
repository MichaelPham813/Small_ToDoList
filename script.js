var inputItems = document.getElementById("inputType");
function AddItems()
{
    var newItems = document.createElement("li");
    newItems.id = "items";
    var itemsUl = document.getElementById("listContainer");
    if(inputItems.value == "")
    {
        alert("Input cannot be empty");
    }
    else
    {
        newItems.appendChild(document.createTextNode(inputItems.value));
        itemsUl.appendChild(newItems);
        inputItems.value = "";
    }
   
}
//Click on li items
function itemsClicker(Event)
{
    var x = Event.target;
    if(x.tagName === 'LI')
    {
        Event.target.classList.toggle("checked");
    }
}


//Remove items that got line through
function removeItems()
{
    var completed = document.getElementsByClassName("checked");
    while(completed.length>0)
    {
        completed[0].parentNode.removeChild(completed[0]);
    }
}



    
