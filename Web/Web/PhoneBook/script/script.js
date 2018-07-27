document.addEventListener("DOMContentLoaded", function(){
    var OKButton = document.getElementById("OK");
    var firstNameInput = document.getElementById("first-name-input");
    var lastNameInput = document.getElementById("last-name-input");
    var phoneNumberInput = document.getElementById("phone-number-input");

    var lastNumber = 1;

    OKButton.addEventListener("click", function(){
        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;
        var phoneNumber = phoneNumberInput.value;

        var newContact = document.createElement("tr");

        var numberTd = document.createElement("td");
        numberTd.setAttribute("class", "number");

        var firstNameTd = document.createElement("td");
        firstNameTd.setAttribute("class", "first-name");

        var lastNameTd = document.createElement("td");
        lastNameTd.setAttribute("class", "last-name");

        var phoneNumberTd = document.createElement("td");
        phoneNumberTd.setAttribute("class", "phone-number");

        var deleteTd = document.createElement("td");
        deleteTd.setAttribute("class", "delete");

        numberTd.innerText = lastNumber;
        lastNumber++;

        lastNameTd.innerText = lastName;
        firstNameTd.innerText = firstName;
        phoneNumberTd.innerText = phoneNumber;    
        
        var newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute("class", "deleteButton");
        newDeleteButton.innerHTML = "Удалить запись";
        
        deleteTd.appendChild(newDeleteButton);

        var tableBody = document.getElementById("table-body");

        newContact.appendChild(numberTd);
        newContact.appendChild(lastNameTd);
        newContact.appendChild(firstNameTd);
        newContact.appendChild(phoneNumberTd);
        newContact.appendChild(deleteTd);

        tableBody.appendChild(newContact);
        
        firstNameInput.value = "";
        lastNameInput.value = "";
        phoneNumberInput.value = "";        
        
        var deleteButtons = document.getElementsByClassName("deleteButton");

        for (var i = 0; i < deleteButtons.length; i++)
        {
            deleteButtons[i].addEventListener("click", function(){
                tableBody.removeChild(this.parentNode.parentNode);

                var numbers = $("tbody .number");

                for (var i = 0; i < numbers.length; i++)
                {
                    numbers[i].innerText = i + 1;
                }

                lastNumber = numbers.length++;
            })
        }    
    })
})