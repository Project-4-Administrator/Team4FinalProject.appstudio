hmbNavConnections.onclick = function(s) {
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


var hobbiesUsers = []

connections.onshow=function(){
    drpConnections.clear()
}


drpConnections.onclick=function(s){
    if (typeof(s) == "object")  
      return                    
    else {
        drpConnections.value = s
        lblConnections.value = 'Nice nice nice'
    }
}

btnConnectionsBack.onclick=function(){
  ChangeForm(customizeAccount)
}

btnConnectionsRefresh.onclick=function(){
  lblConnections.value = ''
  inptHobby1Connections.value = ''
  inptHobby2Connections.value = ''
  inptHobby3Connections.value = ''
}

btnSearchConnections.onclick=function(){
  message = ''
  inputHobby1 = inptHobby1Connections.value
  inputHobby2 = inptHobby2Connections.value
  inputHobby3 = inptHobby3Connections.value
  query = `SELECT username FROM hobby WHERE hobby_1 = "${inputHobby1}" OR hobby_2 = "${inputHobby2}" OR hobby_3 = "${inputHobby3}"`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblConnections.value = 'Something went wrong...'
        else {        
           for (i = 0; i < results.length; i++)
             message = message + results[i] + '\n'
           drpConnections.value = message
        } 
    }
}












