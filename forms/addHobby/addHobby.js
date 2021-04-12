hmbNavAddHobby.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Welcome":
        ChangeForm(appWelcome)
        break
      case "Select":
        ChangeForm(customerSelect)
        break
      case "Insert":
        ChangeForm(customerInsert)
        break
      case "Create":
        ChangeForm(createAccount)
        break
      case "Login":
        ChangeForm(userLogin)
        break
    }
  }
}

btnAddHobbyBack.onclick=function(){
  ChangeForm(customizeAccount)
}

addHobby.onshow=function(){
  lblAddHobbyMessage.value = 'Add up to 3 hobbies to your profile to make yourself stand out and find connections.'
}

