var name=document.getElementById("name");
var num=document.getElementById("num");
var pwd=document.getElementById("pwd");  
var email=document.getElementById("email");
var status=false;  

function validate(){  
  //if(email.value==""||password.value==""){
    //alert("Fields cannot be empty");
    //return false;
  //}
  //else{
    //return true;
  //}

  if(email.value.trim()==""){
    alert("email cannot be empty");
    return false;
  }

  else if(pwd.value.trim=="")
  {
    alert("Password cannot be empty");
    return false;
  }

  else if(pwd.value.length<=8 || pwd.value.search(/[A-Z]+/)==-1 || pwd.value.search(/[a-z]+/)==-1 || pwd.value.search(/[0-9]+/)==-1){
    alert("Password should contain minimum 8 characters, atleast one uppercase, lowercase and number");
    pwd.style.border="10px solid red";
    return false;
  }
  
  else if(pwd.value!=repwd.value){
    alert("Passwords doesn't match");
    return false;
  }

  else if(num.value.trim()==""){
    alert("Phone Number cannot be empty");
    return false;
  }
  else if( num.value.length <10 || num.value.length>10){
    
    alert("Phone Number Must be 10 digits without country code");
    return false;
  }
  else if (num.value.length==10){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if((num.value.match(phoneno))){
    return true;
    }
    else
    {
        alert("message");
        return false;
    }
}
else{
    return true;
    
  }
}