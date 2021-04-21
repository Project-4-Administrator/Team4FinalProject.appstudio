
similarities.onshow=function(){

let similarUser = userLbl.value
query = "SELECT hobby_1, hobby_2, hobby_3 FROM hobby WHERE username = '" + similarUser + "'"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) { //transit trip worked. 
      results = JSON.parse(req.responseText)
      if (results.length == 0)    
          lblMessage2.textContent = "There are no hobbies for that user."
      else {        
          var message = []
          for (i = 0; i < results.length; i++)
              message.push(results[i])
          similarTxt.value = message
            }
} else 
      lblMessage2.textContent = "Error code: " + req.status


logedInUser = lblLoginError.value
query = "SELECT hobby_1, hobby_2, hobby_3 FROM hobby WHERE username = '" + logedInUser + "'"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) { //transit trip worked. 
      resultsA = JSON.parse(req.responseText)
      if (resultsA.length == 0)    
          lblMessage2.textContent = "There are no hobbies for that user."
      else {        
          var message2 = []
          for (i = 0; i < resultsA.length; i++)
                 message2.push(resultsA[i])
          userTxt.value = message2
}
  } else 
      lblMessage2.textContent = "Error code: " + req.status
    

var similarHobbies = []

for (let i = 0; i < 3; i++) {
    for (let j = 0; j <3; j++) {
        if (message[0][i] == message2[0][j]) {
            similarHobbies.push(message[0][i])
          }
}
}
similarPlaces.value = similarHobbies
console.log(similarHobbies)


var similarHobbiesA = similarPlaces.value 
console.log(similarHobbiesA)



let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + similarHobbies[0]+"&key=AIzaSyCyCMHU3j6_4ByfEINA8BV9GYTe6Hxrg9Y&location=41.265331, -95.94936&radius=500&type=restaurant&maxprice=1&rating=>4"

function onXHRLoad() {

    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"
    }
    
    // 2. *** put your textarea control name here ****
    similarPlaces.value = message
    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    
    // Here are headers you might need: 
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***

similarBtn.onclick=function(){
      // call the code that will make the API call, then process what comes back
    callAPI(requestURL)
}
}

