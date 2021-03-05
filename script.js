var count = 3;
var countElement = document.querySelector("#counter")

console.log(countElement)

function add1(){
    count++;
    countElement.innerText = count + " likes(s)" ;
    console.log(count);
}