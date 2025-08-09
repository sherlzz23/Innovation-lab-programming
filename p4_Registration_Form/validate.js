function validateName(name){
    const regex = /^[A-za-z\s]+$/;
    if(name.trim()===""){
        return"Name cannot be empty";
    }
    if(!regex.text(name)){
        return"Name can only contain letters and spaces";
    }
    return "Name is valid";
}

function validateEmail(Email){
    const regex = /^[A-za-z-0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA-z]{2,}$/;
    if(Email.trim()===""){
        return"Email cannot be empty";
    }
    if(!regex.text(Email)){
        return"Invalid Email format";
    }
    return "Email is valid";
}

function validatepassword(password){
    const regex = /^(?=,*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()===""){
        return"password cannot be empty";
    }
    if(!regex.text(password)){
        return"password must be in 10 digit long, contains an uppercase letter and a number";
    }
    return "password is valid";
}

function validatephone(phone){
    const regex = /^[0-9]{10}+$/;
    if(phone.trim()===""){
        return"phone number cannot be empty";
    }
    if(!regex.text(phone)){
        return"phone number must be in 10 digit long";
    }
    return "phone is valid";
}

function validateform(){
    const name = document.getElementById("name").value;
    const Email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const nameError = validateName(name);
    const EmailError = validateEmail(Email);
    const passwordError = validatepassword(password);
    const phoneError = validatephone(phone);

    if(nameError==="name is valid" && EmailError==="Email is valid" && passwordError==="password is invalid" && phoneError==="phone number is valid"){
        return true;
    }
    
    document.getElementById("nameError").innerText = nameError==="Name is valid" ?"": nameError;
    document.getElementById("EmailError").innerText = EmailError==="Email is valid" ?"": EmailError;
    document.getElementById("passwordError").innerText = passwordError==="password is valid" ?"": passwordError;
    document.getElementById("phoneError").innerText = phoneError==="phone number is valid" ?"": phoneError; 
    return false;   
}