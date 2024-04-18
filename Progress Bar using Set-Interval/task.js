

let width = 1;
let perc = 1;
let timer = setInterval(progress,100);

function progress() {
  width = width + 1;
  perc = parseInt((width/100)*100);
  if (width <=100) {

    if (width <= 25) {
    //   document.querySelector("#progress").style.width = width + "vw";
    //   document.querySelector("#progress").style.backgroundColor = "red";
      document.querySelector("#progress").setAttribute("style",
      "text-align:center;color:white;background-color:red;width:"+width+"vw")
      document.querySelector("#progress").innerHTML = perc+"%";
      
    } else if (width <= 50) {
        document.querySelector("#progress").setAttribute("style",
        "text-align:center;color:white;background-color:#ff4500;width:"+width+"vw")
        document.querySelector("#progress").innerHTML = perc+"%";
    } else if (width <= 75) {
        document.querySelector("#progress").setAttribute("style",
        "text-align:center;color:white;background-color:orange;width:"+width+"vw")
        document.querySelector("#progress").innerHTML = perc+"%";
    } else {
        document.querySelector("#progress").setAttribute("style",
        "text-align:center;color:white;background-color:green;width:"+width+"vw")
        document.querySelector("#progress").innerHTML = perc+"%";
    }
  } else {
    clearInterval(timer);
  }
}
