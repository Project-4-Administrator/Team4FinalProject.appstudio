let activities=[]

btnSubmitAct.onclick=function(){
  activities.push(inptAct.value)
  console.log(activities)
}

btnSug.onclick=function(){ 
  ChangeForm(voteAct)
}