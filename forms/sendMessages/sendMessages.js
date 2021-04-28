hmbNavSendMessages.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Welcome":
        ChangeForm(appWelcome)
        break
      case "Select Customer":
        ChangeForm(customerSelect)
        break
      case "User Login":
        ChangeForm(userLogin)
        break
      case "Sign Up":
        ChangeForm(createAccount)
        break
      
    }
  }
}

btnViewMessages.onclick=function(){
  ChangeForm(viewMessages)
}


