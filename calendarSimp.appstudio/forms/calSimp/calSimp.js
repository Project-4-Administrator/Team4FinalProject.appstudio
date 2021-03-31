let month= ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
calSimp.onshow=function(){
 // always clear before populating
    dpdMonth.clear()   
    // put array of months in the dropdown (called populating it)
    for (i = 0; i <month.length; i++) 
        dpdMonth.addItem(month[i])
}
s=""
dpdMonth.onclick=function(){
  if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    dpdMonth.value = s   // make dropdown show choice user made
    console.log(`The user chose ${s} and .selection is ${dpdMonth.selection}.`)
  }
}

//date
date=""
