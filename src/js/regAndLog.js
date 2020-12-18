$("#RegInMode").bind("click", function (e) {
    $("#RegInMode").css("background-color", "rgb(15, 0, 218)");
    $("#LogInMode").css("background-color", "rgb(0, 102, 255)");
    $("#regInForm").show();
    $("#logInForm").hide();
});
$("#LogInMode").bind("click", function (e) {
    $("#LogInMode").css("background-color", "rgb(15, 0, 218)");
    $("#RegInMode").css("background-color", "rgb(0, 102, 255)");
    $("#logInForm").show();
    $("#regInForm").hide();
});

let regInForm = $(document.regIn)[0];
let logInForm = $(document.logIn)[0];

$(regInForm.submit).bind("click", function (e) {
    document.getElementById("WarningBox").innerHTML = "";

    let IsValid = true;
    let expressions_nickname = /[a-z]{4,255}/i;
    let expressions_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let expressions_password = /[0-9a-z]+/i;

    if(!expressions_nickname.test(regInForm.nickname.value))
        PrintWarning('Incorrectly filled "Nickname" field!');
    if(!expressions_email.test(String(regInForm.email.value).toLowerCase()))
        PrintWarning('Incorrectly filled "Email" field!');
    if(!expressions_password.test(regInForm.password.value))
        PrintWarning('Incorrectly filled "Password" field!');
    if(regInForm.password.value != regInForm.ConfirmPassword.value)
        PrintWarning('Passwords do not match!');

    if(IsValid){
        // TO DO register
        console.log("Done register!");
    }
    function PrintWarning(message){
        IsValid = false;
        let obj = document.createElement("span");
        obj.innerHTML = message;
        document.getElementById("WarningBox").appendChild(obj);
        document.getElementById("WarningBox").innerHTML += "</br>";
    }
});

$(logInForm.submit).bind("click", function (e) {
    let IsValid = true;
    let expressions_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let expressions_password = /[0-9a-z]+/i;

    if(!expressions_password.test(logInForm.password.value) ||
     !expressions_email.test(String(logInForm.email.value).toLowerCase()) ||
     !CheckLogIn())
        PrintWarning('Wrong login or password!');

    if(IsValid && CheckLogIn()){

    }    
    
    function PrintWarning(message){
        IsValid = false;
        let obj = document.createElement("span");
        obj.innerHTML = message;
        document.getElementById("WarningBox").appendChild(obj);
        document.getElementById("WarningBox").innerHTML += "</br>";
    }
    function CheckLogIn(){
        return false;
    }
});