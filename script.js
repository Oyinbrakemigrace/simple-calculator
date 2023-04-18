var screen = document.querySelector(".screen")
var buttons = document.querySelectorAll("button")

var data = []  //any number typed goes in here
var res;

function handleClick(button){
var value = button.innerText  //used to get what you click


if(value === "CLEAR ALL"){
    data = []
    screen.innerText = 0
    }

else if(value === "="){ 
    res = (eval(data.join("")))
     data = []   //stores res inside here incase of further evaluation
    data.push(res)  //since it is pushing something, it should give the res
    screen.innerText = res 
}

else if (value === "C"){
    data.pop()
    screen.innerText = data.join("")
    }
else{
    data.push(value)
    screen.innerText = data.join("")
}
}

buttons.forEach ((button) => button.onclick = ()=> handleClick(button))

//or 
/*buttons.forEach(function(button){
    button.onclick = function(){
        handleClick(button)
    }
})*/