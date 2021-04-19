hmbNavCustomerInsert.onclick = function(s) {
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


btnInsert.onclick=function(){
    let customer_f_name = inptFirstName.value
    let customer_l_name = inptLastName.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zipcode = inptZipcode.value
    let phone = inptPhone.value
    let email = inptEmail.value
    let user_password = inptUserPassword.value
    let username = inptCreateUserName.value
    let query = "INSERT INTO customer (`customer_f_name`,`customer_l_name`, `street`, `city`, `state`, `zipcode`, `phone`, `email`, `password`, `username`) VALUES ('" + customer_f_name + "', '" + customer_l_name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "', '" + phone + "', '" + email + "', '" + user_password + "', '" + username + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblInsert.textContent = "You have successfully added the customer!"
        else
            lblInsert.textContent = "There was a problem with adding the customer to the database."
    } else 
        lblInsert.textContent = "Error: " + req.status
}


