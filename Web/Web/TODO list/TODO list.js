document.addEventListener("DOMContentLoaded", function () {
    var addTodoButton = document.getElementById("ok");
    var addTodoInput = document.getElementById("note");
    var list = document.getElementById("list");

    addTodoButton.addEventListener("click", function () {
        var text = addTodoInput.value;
        var checkText = text.replace(/\s/g, "");
        
        if (text !== "" && checkText !== "") {
            var listItem = document.createElement("li");
            listItem.innerText = text;

            var newDeleteButton = document.createElement("button");
            newDeleteButton.className = "deleteButton";
            newDeleteButton.innerHTML = "Удалить запись";
            newDeleteButton.addEventListener("click", function () {
                list.removeChild(this.parentNode);
            });
        
            listItem.appendChild(newDeleteButton);

            list.appendChild(listItem);
            addTodoInput.value = "";
        }
    });
});