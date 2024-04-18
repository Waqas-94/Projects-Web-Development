//make a program that counts a value and display timer as clock

let sec = 0;
let min = 0;
let hour = 1;

let time = setInterval(clock,10);

function clock() {
  if (sec < 59) 
  {
    sec = sec + 1;
  } 
  else 
    { 
        if(min<59)
        {
            sec = 0;
            min = min + 1;
        }
        else
        { 
            if(hour<11)
            {
                sec=0;
                min=0;
                hour=hour+1;
            }
            else
            {
                min=0;sec=0;hour=0
            }  
        }
    }

if(hour<9 || min<9 || sec<9)
{
    hour = hour.toString().padStart(2,"0");
    min= min.toString().padStart(2,"0");
    sec = sec.toString().padStart(2,"0");
}

    let target = document.querySelector("p");
    target.innerHTML = hour + ":" + min + ":" + sec;

    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);
}