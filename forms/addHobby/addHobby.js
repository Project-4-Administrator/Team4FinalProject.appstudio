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


btnAddHobbies.onclick=function(){
    let hobby_1 = inptHobby1.value
    let hobby_2 = inptHobby2.value
    let hobby_3 = inptHobby3.value
    let customer_id = inptCustomerIDHobby.value
    let query = `INSERT INTO hobby (`hobby_1`, `hobby_2`, `hobby_3`) VALUES ('" + hobby_1 + "', '" + hobby_2 + "', '" + hobby_3 + "') WHERE customer_id = ${customer_id}`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblAddHobbyMessage.value = `You have successfully added ${hobby_1}, ${hobby_2} and ${hobby_3} as your hobbies!`
        else
            lblAddHobbyMessage.value = "There was a problem with adding these hobbies to the database."
    } else 
        lblAddHobbyMessage.value = "Error: " + req.status
}
