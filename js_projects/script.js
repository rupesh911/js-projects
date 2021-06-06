button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

button1.addEventListener("click", showMessage)
function showMessage(){
    let message = `Welcome ${input1.value} in the course of javascript`
    output.innerHTML =  "<h1> hello </h1>" + message
}
