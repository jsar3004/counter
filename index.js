var number = 0;
document.getElementById("myText").innerHTML = number;
let but = document.getElementById("button");
but.addEventListener("click", function (e) {
  
    number++;
    document.getElementById("myText").innerHTML = number;
  });