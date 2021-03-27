let email =  document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    let regexp=/^(\w+)@([A-Za-z0-9\_]+).([a-z]{2,4})(.[a-z]{2,3})?$/
   
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(regexp.test(email.value)!=true) { 
        alert("Enter email in the valid format");
        return false;
        }
    else if(pwd.value.trim()==""){
        alert("Password cannot be empty");
        return false;
    }
    else if(pwd.value.length <8){
        
        alert("Password doesnt have the sufficent length");
        return false;
    }
    else{
        return true;
        
    }
}

