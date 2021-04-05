//to dos!! add photo for activity genie
var selections = []

//populates the dropdown with activities array.
voteAct.onshow = function() {
  selAct.clear()
  for (i = 0; i < activities.length; i++)
    selAct.addItem(activities[i])
}

selAct.onchange=function(){
   selections.push(selAct.value)
  console.log(selections)
}

btnShow.onclick = function() {
  lblSug.value = (`You should go ${selections[0]} on ${dpdMonth.selection}, ${date}!`)
}

//example code
/*
favExercises.onshow = function() {
  selExercises.clear()
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    selExercises.addItem(coreExercises[i])
}

selExercises.onclick = function() {
  selections.push(selExercises.value)
}

btnShow.onclick = function() {
  if (selections[0] == "situps" && selections[1] == "plank") {
    lblExercises.value = (`You chose ${selections[0]} and ${selections[1]} - those are the two core exercises.`)
  } else if (selections[1] == "situps" && selections[0] == "plank") {
    lblExercises.value = (`You chose ${selections[0]} and ${selections[1]} - those are the two core exercises.`)
  } else {
    lblExercises.value = (`You did not pick the two core exercises.`)
  }
}
btnMobNav.onclick=function(){
  ChangeForm(mobileNav)
}

*/

