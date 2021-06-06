button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

button1.addEventListener("click", showMessage)

function showMessage(){
    let a 
    a=((input1.value*10)/100)
    console.log(a)

    let message = `Tip of ${a} credited in your salary account`
    output.innerHTML =  message
}
