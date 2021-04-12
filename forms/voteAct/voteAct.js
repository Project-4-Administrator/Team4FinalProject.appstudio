
dpdOptionsAct.onshow=function(){
dpdOptionsAct.clear()
for(i=0; i<activities.length; i++)
  dpdOptionsAct.addItem(activities[i])
}

btnVote.onclick=function(){
  ChangeForm(suggestAct)
}


