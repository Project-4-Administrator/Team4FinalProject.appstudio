hmbNavCustomizeAccount.onclick = function(s) {
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

customizeAccount.onshow=function(){
  lblCustomize.value = 'Customize and view your profile!'
  lblCustomerIDReminder.value = 'Forget your ID? Enter your username to search for it!'
}

btnCustomerID.onclick=function(){
  lblCustomerIDReminder.value = ''
  inputUsername = inptUsernameSearch.value
  query = `SELECT customer_id FROM customer WHERE username = "${inputUsername}"`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomize.value = 'Something went wrong...'
        else {        
           lblCustomize.value = `Your customer ID number is ${results}`
        } 
    }
}

btnShowHobbies.onclick=function(){
  inputUsername = inptUsername.value
  query = `SELECT * FROM hobby WHERE username = "${inputUsername}"`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomize.value = 'Something went wrong...'
        else {        
           for (i = 0; i < results.length; i++)
             
           lblCustomize.value = `Your customer ID number is ${results}`
        } 
    }
}

btnAddHobby.onclick=function(){
  ChangeForm(addHobby)
}

btnCustomizeAccountRefresh.onclick=function(){
  lblCustomize.value = 'Customize and view your profile!'
  lblCustomerIDReminder.value = 'Forget your ID? Enter your username to search for it!'
  inptUsernameSearch.value = ''
  txtHobbies.value = ''
  
}
