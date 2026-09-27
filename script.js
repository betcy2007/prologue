// Get the membership form

const form = document.getElementById("membershipForm");


// Get the message area

const message = document.getElementById("formMessage");


// Run this when the form is submitted

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing

    event.preventDefault();


    // Get the values entered by the user

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const interest = document.getElementById("interest").value;


    // Check whether all fields are filled

    if (
        name === "" ||
        email === "" ||
        department === "" ||
        year === "" ||
        interest === ""
    ) {

        message.textContent =
            "Please fill in all the fields.";

        message.style.color = "#8a6748";

        return;
    }


    // Display success message

    message.textContent =
        "Thank you, " + name +
        "! Your membership application has been submitted.";

    message.style.color = "#253238";


    // Clear the form

    form.reset();

});