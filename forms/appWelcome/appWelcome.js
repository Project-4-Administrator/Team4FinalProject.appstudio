appWelcome.onshow=function(){
  lblWelcome.value = "[APP NAME] Login"
  lblFooter.value = "Relationships have never been this easy."
}



btnLogin.onclick = function() {
  ChangeForm(userLogin)
}

btnSignUp.onclick = function() {
  ChangeForm(createAccount)
}


/*
dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i < dessertList.length; i++) 
        drpDesserts.addItem(dessertList[i])
}
*/

