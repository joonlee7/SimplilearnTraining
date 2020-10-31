
function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;

    var nameErr = emailErr = mobile = true;

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

    if (nameErr || emailErr || mobileErr == true) {
        return false;
    } else {
        alert('You have submitted the form.');
    }
}