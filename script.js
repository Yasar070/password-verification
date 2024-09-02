var namebo=document.getElementById("namebox")
var passwordbox=document.getElementById("passwordbox")
var repasswordbox=document.getElementById("repasswordbox")
var nameError= document.getElementById("nameError")
var passwordError=document.querySelector("")
var passwordError=document.querySelector("passwordError")
var repasswordError=document.querySelector("repasswordError")
var btn=document.getElementById("btn")




btn.addEventListener("click",function(){
    event.preventDefault
    

    var nameInputRegExp=/^\[a-zA-z]+$/
    var emailInputRegExp=/^\[a-zA-z]+@gmail.com/
    var passwordInputRegExp=/^\[a-zA-z,0-9]+$/

    if(nameInputRegExp.test(namebox.value==false))
{
    document.getElementById("nameError").style.display="inline"
}
else{
    document.getElementById("nameError").style.display="none"
}

if(emailInputRegExp.test(emailInput.value==false))
{
    document.getElementById("span2").style.display="inline"
}
else{
    document.getElementById("span2").style.display="none"
}

if(passwordInputRegExp.test(passwordInput.value==false))
{
    document.getElementById("span3").style.display="inline"
}
else{
    document.getElementById("span3").style.display="none"
}
})

</script>