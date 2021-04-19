selection = ""
choice=[]

dpdOptionsAct.onshow = function() {
  dpdOptionsAct.clear()
  for (i = 0; i < activities.length; i++)
    dpdOptionsAct.addItem(activities[i])
}

dpdOptionsAct.onclick = function() {
  if (typeof(selection) == "object") { // means the control was clicked 
    return // but no selection made yet so do nothing
  } else { // a selection made
    dpdOptionsAct.value = selection // make dropdown show choice the user made
    console.log(`The user chose ${selection}.`)
  }
}
switch (activities.indexOf(selection)) {
  case 0:
    firstChoice + 1
    console.log(firstChoice);
  case 1:
    secondChoice + 1
    console.log(secondChoice);
  case 2:
    thirdChoice + 1;
    (thirdChoice);
  case 3:
    fourthChoice + 1
    (fourthChoice);
  case 4:
    fifthChoice + 1
    (fifthChoice);;
  default:
   lblActResults.innerText = "Please make a proper selection"
}
function selectWin(firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice) {
  Math.max(firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice)
}

btnVote.onclick = function() {
  ChangeForm(suggestAct)
}

/*
the inputs updates the DB with insert
1) get activities from the DB
2)  populate the drop down with the data base
3) vote "update" DB
4) 