//? -------------------------------------------------
let toIncrease = document.querySelector("#toIncrease");  //  We are calling elements with id in our html content.
let toRecude = document.querySelector("#toRecude");  //  We are calling elements with id in our html content.
let reset = document.querySelector("#reset");  //  We are calling elements with id in our html content.
let newNumber = 0;   //  We are throwing an empty value.

function reqColors(){   //  We create a coloring class by numbers.
    if(newNumber == 0){   //  We set conditions.
        document.body.style.color = "black";  //  We enter the codes that will run after the condition is met.
    } else if(newNumber <= -1){    //! |  We set conditions.
        document.body.style.color = "red";  //  We enter the codes that will run after the condition is met.
    } else if (newNumber >= 1){    //! |  We set conditions.
        document.body.style.color = "green";  //  We enter the codes that will run after the condition is met.
    }
}

toIncrease.addEventListener("click",function(){
    let increasingNumber = document.querySelector("#increasingNumber").innerHTML = newNumber+=1  //  We add an event and write the line of code that will interact when we click it.
    reqColors();  //  We call the function.
});

toRecude.addEventListener("click",function(){
    let decreasingNumber = document.querySelector("#increasingNumber").innerHTML = newNumber-=1  //  We add an event and write the line of code that will interact when we click it.
    reqColors();  //  We call the function.
});

reset.addEventListener("click",function(){
    let resetNumber = document.querySelector("#increasingNumber").innerHTML = newNumber=0  //  We add an event and write the line of code that will interact when we click it.
    reqColors();  //  We call the function.
});



