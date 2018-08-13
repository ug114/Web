document.addEventListener("DOMContentLoaded", function () {
    var okButton = document.getElementById("ok");
    var firstNameInput = document.getElementById("first-name-input");
    var lastNameInput = document.getElementById("last-name-input");
    var phoneNumberInput = document.getElementById("phone-number-input");

    var lastNumber = 1;

    // Добавление контакта
    okButton.addEventListener("click", function () {
        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;
        var phoneNumber = phoneNumberInput.value;
        var isExisting = false;

        if (firstName !== "") {
            $("#first-name-input").css("border-color", "initial");
            $("#first-name-error-message").css("visibility", "hidden");
        }

        if (lastName !== "") {
            $("#last-name-input").css("border-color", "initial");
            $("#last-name-error-message").css("visibility", "hidden");
        }

        if (phoneNumber !== "") {
            $("#phone-number-input").css("border-color", "initial");
            $("#phone-number-error-message").css("visibility", "hidden");
        }

        if (firstName !== "" && lastName !== "" && phoneNumber !== "") {
            var contacts = $("td.phone-number");

            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].innerText === phoneNumber) {
                    alert("Контакт с таким номером телефона уже существует.");
                    isExisting = true;
                    break;
                }
            }

            if (isExisting === false) {
                var newContact = document.createElement("tr");

                var deleteCheckboxTd = document.createElement("td");
                deleteCheckboxTd.setAttribute("class", "delete-checkbox-td");

                var deleteCheckbox = document.createElement("input");
                deleteCheckbox.setAttribute("type", "checkbox");
                deleteCheckbox.setAttribute("class", "delete-checkbox");
                deleteCheckboxTd.appendChild(deleteCheckbox);

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

                var newDeleteButton = document.createElement("img");
                newDeleteButton.setAttribute("src", "./image/delete.png");
                newDeleteButton.setAttribute("width", "20px");
                newDeleteButton.setAttribute("class", "deleteButton");

                deleteTd.appendChild(newDeleteButton);

                var tableBody = document.getElementById("table-body");

                newContact.appendChild(deleteCheckboxTd);
                newContact.appendChild(numberTd);
                newContact.appendChild(lastNameTd);
                newContact.appendChild(firstNameTd);
                newContact.appendChild(phoneNumberTd);
                newContact.appendChild(deleteTd);

                tableBody.appendChild(newContact);

                firstNameInput.value = "";
                lastNameInput.value = "";
                phoneNumberInput.value = "";
            }

            
        }
        else {
            if (firstName === "") {
                $("#first-name-input").css("border-color", "red");
                $("#first-name-error-message").css("visibility", "visible");
            }

            if (lastName === "") {
                $("#last-name-input").css("border-color", "red");
                $("#last-name-error-message").css("visibility", "visible");
            }

            if (phoneNumber === "") {
                $("#phone-number-input").css("border-color", "red");
                $("#phone-number-error-message").css("visibility", "visible");
            }
        }

        var deleteButtons = document.getElementsByClassName("deleteButton");

        for (var i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function () {
                var contact = $(this).closest("tr");
                contact.remove();

                var numbers = $("tbody .number");

                for (var i = 0; i < numbers.length; i++) {
                    numbers[i].innerText = i + 1;
                }

                lastNumber = numbers.length++;
            });
        }

        var deleteCheckboxButton = document.getElementById("delete-checkbox-button");

        deleteCheckboxButton.addEventListener("click", function () {

            var deleteCheckboxes = $(".delete-checkbox:checkbox:checked");

            for (var i = 0; i < deleteCheckboxes.length; i++) {
                var closestTr = deleteCheckboxes[i].closest("tr");
                closestTr.remove();
            }

            $("#delete-all-checkbox").prop("checked", false);

            var numbers = $("tbody .number");

            for (var i = 0; i < numbers.length; i++) {
                numbers[i].innerText = i + 1;
            }

            lastNumber = numbers.length + 1;
        });

        // Общий чекбокс
        var deleteAllCheckbox = document.getElementById("delete-all-checkbox");

        deleteAllCheckbox.addEventListener("click", function () {
            $(this).is(':checked') ? $(".delete-checkbox").prop("checked", true) : $(".delete-checkbox").prop("checked", false);
        });

        // Поиск
        searchButton = document.getElementById("search");
        searchButton.addEventListener("click", function () {
            searchTextElement = document.getElementById("search-text");
            searchText = searchTextElement.innerText;

            var lastNames = document.getElementsByClassName("last-name");
            var firstNames = document.getElementsByClassName("first-name");
            var numbers = document.getElementsByClassName("phone-number");

            for (var i = 0; lastNames.length; i++) {
                if (searchText !== lastNames[i].value && searchText !== firstNames[i].value && searchText !== numbers[i].value) {
                    //var closestParent = lastNames[i].closest("tr");
                    //closestParent.hide();
                }
            }
        });
    });
});