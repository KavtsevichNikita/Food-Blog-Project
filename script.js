document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const sendButton = document.querySelector("#send");

    sendButton.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const url = document.querySelector("#url").value;
        const keywords = document.querySelector("#keywords").value;
        const pastries = document.querySelector("#pastries-checkbox").checked;
        const message = document.querySelector("textarea[name='message']").value;
        const foodRatingElements = document.querySelectorAll("input[name='foodRating']");

        let formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

        let foodRatingValue;
        for (const radio of foodRatingElements) {
            if (radio.checked) {
                foodRatingValue = radio.value;
                break;
            }
        }

        const formData = {
            name,
            email,
            url,
            keywords,
            pastries,
            message,
            foodRatingValue,
            created: new Date()
        };

        if (name === "" || email === "" || url === "" || message === "" || !foodRatingValue) {
            alert("All fields must be filled out!");
        } else {
            formDataArray.push(formData);
            localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

            window.location.href = "./article2.html";
        }
    });
});

    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const urlInput = document.getElementById('url');
    const keywordsInput = document.getElementById('keywords');
    const pastriesCheckbox = document.getElementById('pastries-checkbox');
    const messageTextarea = document.querySelector('textarea');
    const resetButton = document.getElementById('reset');


    resetButton.addEventListener('click', function () {
        nameInput.value = '';
        emailInput.value = '';
        urlInput.value = '';
        keywordsInput.value = '';
        pastriesCheckbox.checked = false;
        messageTextarea.value = '';
    });
