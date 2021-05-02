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

btnViewMessagesBack.onclick=function(){
  ChangeForm(sendMessages)
}

btnShowMessages.onclick=function(){
  inputUsername = inptViewMessages.value
  message = ''
  query = `SELECT memo FROM message WHERE receive_user = "${inputUsername}"`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtViewMessages.value = 'You have no messages.'
        else {        
           for (i = 0; i < results.length; i++)
             message = message + results[i] + '\n'
           txtViewMessages.value = message
        } 
    }
}
