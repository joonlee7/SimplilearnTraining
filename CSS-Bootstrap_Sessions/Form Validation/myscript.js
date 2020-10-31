
function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName('hobbies[]');

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr = emailErr = mobile = country = gender = true;

    if (name == '') {
        printError('nameErr', 'Please enter your name');
    } else {
        var regex = /^[a-zA-Z]+$/;
        if (regex.test(name) === false) {
            printError('nameErr', 'Please enter a valid name');
        } else {
            printError('nameErr', '');
            nameErr = false;
        }
    }

    if (email == '') {
        printError('emailErr', 'Please enter your email address');
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError('emailErr', 'Please enter a valid email address');
        } else {
            printError('emailErr', '');
            emailErr = false;
        }
    }

       if(mobile == "") {
        printError("mobileErr", "Please enter a mobile number");
    } else {
        var regex = /^\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number")
        } else if (mobile.length() != 10) {
            printError("mobileErr", "Please enter a valid mobile number")
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(country == "") {
        printError("countryErr", "Please select a country");
    } else if(country !== "Australia" ||
              country !== "India" ||
              country !== "United States" ||
              country !== "United Kingdom") {
        printError("countryErr", "Please select a country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    if(gender == "") {
        printError("genderErr", "Please select gender");
    } else if (gender !== "Male" || gender !== "Female") {
        printError("genderErr", "Please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if (nameErr || emailErr || mobileErr || countryErr || genderErr == true) {
        return false;
    } else {
        alert('You have submitted the form.');
    }
}