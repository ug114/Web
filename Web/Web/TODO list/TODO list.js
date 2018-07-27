document.addEventListener("DOMContentLoaded", function(){
    var addTodoButton = document.getElementById("OK");
    var addTodoInput = document.getElementById("note");
    var list = document.getElementById("list");

    addTodoButton.addEventListener("click", function(){
        var text = addTodoInput.value;

        var listItem = document.createElement("li");
        listItem.innerText = text;

        var newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute("class", "deleteButton");
        newDeleteButton.innerHTML = "Удалить запись";
        listItem.appendChild(newDeleteButton);

        list.appendChild(listItem);
        addTodoInput.value = "";     
        
        var deleteButtons = document.getElementsByClassName("deleteButton");

        for (var i = 0; i < deleteButtons.length; i++)
        {
            deleteButtons[i].addEventListener("click", function(){
                list.removeChild(this.parentNode);
            })
        }    
    })
})