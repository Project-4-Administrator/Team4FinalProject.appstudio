// global variables for database calls
let req = ""
let query = ""
let results = ""
let pw = "Albatro$$19"  // put your database password here
let netID = "dbs15065"
let database = "375groupa4"
let allCustomerData = []

btnSearch.onclick=function(){        
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomers.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtCustomerResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblCustomers.textContent = "Error code: " + req.status
}

btnCustomerInsert.onclick = function() {
  ChangeForm(createAccount)
}

hmbNavUserLogin.onclick = function(s) {
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



