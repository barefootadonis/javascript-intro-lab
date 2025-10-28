// document.getElementById("myHeading").innerHTML = "Adesuwa"

// document.querySelector("nav ul li").setAttribute("class", "currentPage")

// document.querySelector("nav ul li a").setAttribute("href", "https://uk.pinterest.com/")


const myHeading = document.getElementById("myHeading");
myHeading.innerText = "Hello, world!";

const myLink = document.querySelector("nav ul li")
myLink.setAttribute("class", "currentPage")

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

document.getElementById('myTestBtn').addEventListener('click', function(ev) {
    console.info(ev.target)
});


for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", function(ev){
        console.info(ev.target.classList)
        
    if (classList.contains("reset")) {
    console.info("Default Button Clicked");
    document.body.removeAttribute("class");
 }      else if (classList.contains("red")) {
             console.info("Red Button Clicked");
             document.body.setAttribute("class", "redBack");
         } else if (classList.contains("green")) {
             console.info("Green Button Clicked");
             document.body.setAttribute("class", "greenBack");
         } else if (classList.contains("blue")) {
             console.info("Blue Button Clicked");
             document.body.setAttribute("class", "blueBack");
         }
 
    })
}


// const redBtn = document.querySelector(".red")
// redBtn.addEventListener("click", function(){
//     console.info("Red Button Clicked")
//     document.body.setAttribute("class", "redBack")
// })

// const greenBtn = document.querySelector(".green")
// greenBtn.addEventListener("click", function(){
//     console.info("Green Button Clicked")
//     document.body.setAttribute("class", "greenBack")
// })

// const blueBtn = document.querySelector(".blue")
// blueBtn.addEventListener("click", function(){
//     console.info("Blue Button Clicked")
//     document.body.setAttribute("class", "blueBack")
// })

// const defaultBtn = document.querySelector(".reset")
// defaultBtn.addEventListener("click", function(){
//     console.info("Default Button Clicked")
//     document.body.removeAttribute("class")
// })