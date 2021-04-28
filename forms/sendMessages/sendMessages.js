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

btnSendMessagesBack.onclick=function(){
  ChangeForm(similarities)
}


btnSendMessage.onclick=function(){
    let memo = txtMessages.value
    let sender = inptSenderMessages.value
    let recipient = inptRecipientMessages.value
    let query = "INSERT INTO message (`memo`,`send_user`, `receive_user`) VALUES ('" + memo + "', '" + sender + "', '" + recipient + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessages.textContent = "Message sent!"
        else
            lblMessages.textContent = "There was a problem sending the message..."
    } else 
        lblMessages.textContent = "Error: " + req.status
}








