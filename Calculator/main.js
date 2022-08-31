// display output on the screen

let clicked = document.querySelectorAll('.btn1');
// This clicked varibale get the whole data(attribute and content) of all butttons

clicked.forEach(function(button){
    button.addEventListener('click', function(){
        let display = document.getElementById('display');
        let lastChacracter = display.innerHTML[display.innerHTML.length-1]    
        // lastChacracter get last element of display string
        if(lastChacracter == '+' || lastChacracter == '-' || lastChacracter == '*' || lastChacracter == '/'){
        // display.innerHTML = display.innerHTML.slice(0,-1);
        "Notion,Data,Identity,".replace(/.$/,".")
        }
        if (this.innerHTML == 'AC'){      // this.innerHTML --> get the content of the button
            display.innerHTML = '';    
        }
        else if (this.innerHTML == '='){
            let expression = eval(display.innerHTML);
            if(expression!==undefined){
                display.innerHTML = expression;
            }
        }
        else{
            display.innerHTML += this.innerHTML
        }
    })
})






let res = "Notion,Data,Identity,".replace(/o$/,"y")
console.log(res);