let month = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

calSimp.onshow = function() {
  // always clear before populating
  dpdMonth.clear()
  // put array of months in the dropdown (called populating it)
  for (i = 0; i < month.length; i++)
    dpdMonth.addItem(month[i])
}
yourMonth = ""
dpdMonth.onclick = function() {
  if (typeof(yourMonth) == "object") { // means the control was clicked but no selection made yet
    return // do nothing
  } else {
    dpdMonth.value = yourMonth // make dropdown show choice user made
    console.log(`The user chose ${yourMonth} and .selection is ${dpdMonth.selection}.`)
  }
}

//date
date = ""

inptDate.onchange = function() {
  date = inptDate.value
  console.log(`The date is ${date}`)
}

//activities
activities = []
numberAct = prompt("how many activities will you enter today?")

for (i = 0; i < numberAct; i++) {
  newActivity = prompt("Please enter your desired activity...")
  activities.push(newActivity)
  console.log(activities)
}
btnVote.onclick = function() {
  ChangeForm(voteAct)
}