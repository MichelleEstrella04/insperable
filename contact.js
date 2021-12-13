// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var fname = document.contactForm.fname.value;
    var lastName = document.contactForm.lastName.value;
    var email = document.contactForm.email.value;
    var message = document.contactForm.message.value;
    
	// Defining error variables with a default value
    var fnameError = lastNameError = emailError = messageError = true;
    
    // Validate name
    if(fname == "") {
        printError("fnameError", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) === false) {
            printError("fnameError", "Please enter a valid name");
        } else {
            printError("fnameError", "");
            fnameError = false;
        }
    }

    if(lastName == "") {
        printError("lastNameError", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastName) === false) {
            printError("lastNameError", "Please enter a valid name");
        } else {
            printError("lastNameError", "");
            lastNameError = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailError", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
        } else{
            printError("emailError", "");
            emailError = false;
        }
    }
    // Validate question
    if(message == "") {
        printError("messageError", "Please enter your question");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) === false) {
            printError("messageError", "Please enter a valid question");
        } else {
            printError("messageError", "");
            messageError = false;
        }
    }
       
    
    // Prevent the form from being submitted if there are any errors
    if((fnameError || lastNameError  || emailError || messageError) == true) {
       return false;
    }else {

        var dataPreview = "Your Question Has Been Submitted "
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
   
    }
};