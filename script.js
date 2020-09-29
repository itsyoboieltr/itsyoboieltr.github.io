const form = document.getElementById('Form');
const username = document.getElementById('Name');
const email = document.getElementById('Email');
const problem = document.getElementById('Problem');

form.addEventListener('submit', e => {
    if (checkInputs()) {

    }
    else{
        e.preventDefault();
    }
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const problemValue = problem.value.trim();
    var x = false;
    var y = false;
    var z = false;

    if (usernameValue === '') {
        setErrorFor(username, 'Please enter your name!');
    } else {
        setSuccessFor(username);
        var x = true;
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email!');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
        var y = true;
    }

    if (problemValue === '') {
        setErrorFor(problem, 'Please describe the problem!');
    } else {
        setSuccessFor(problem);
        var z = true;
    }

    if (x == true && y == true && z == true){
        return true;
    }
    else {
        return false;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
