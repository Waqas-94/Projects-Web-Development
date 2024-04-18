

function heading_bg()
{
    let a = document.getElementById("heading-bg").value;
    document.getElementById("heading").setAttribute( "style", 
    "height:10vh; width:60vw; align-content:center; border:2px solid white;justify-self: center;align-self:center; font-size:36px; font-weight:bolder;border-radius:10px;margin:5px;color:white;background-color: "+a);  
    document.getElementById("heading-bg").value="";   
}

function heading_text()
{
    let a = document.getElementById("heading-text").value;
    document.getElementById("heading").innerText = a; 
    document.getElementById("heading-text").value="";   
}

function div_bg()
{
let a = document.getElementById("div-bg").value;
document.getElementById("div").setAttribute( "style", 
"height:50vh; width:60vw; align-content:center; border:2px solid white;justify-self:center;align-self:center; font-size:20px;border-radius:10px;margin:5px;color:white;background-color: "+a); 
document.getElementById("div-bg").value="";
}

function div_text()
{
    let a = document.getElementById("div-text").value;
    document.getElementById("div").innerText = a; 
    document.getElementById("div-text").value="";   
}

// code from chatgpt
function input_image() {
    const fileInput = document.getElementById("input-image");
    const imageElement = document.getElementById("im");
    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            imageElement.src = event.target.result;
        };
        
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// function input_image()
// {
// let a = document.getElementById("input-image").value;
// console.log(a)
// let sb_str = a.substring(12,a.length);
// console.log(sb_str)
// document.getElementById("image").setAttribute( "style", 
// "height:50vh; width:40vw; align-content:center;justify-self:center;align-self:center;padding:10px;overflow:hidden" );
// document.getElementById("im").src=sb_str;
// }

function ftr_bg()
{
    let a = document.getElementById("ftr-bg").value;
    document.getElementById("ftr").setAttribute( "style", 
    "height:10vh; width:60vw; align-content:center; border:2px solid white;justify-self: center;align-self:center; font-size:20px;border-radius:10px;margin:5px;color:white; background-color: "+a);  
    document.getElementById("ftr-bg").value="";   
}

function ftr_text()
{
    let a = document.getElementById("ftr-text").value;
    document.getElementById("ftr").innerText = a; 
    document.getElementById("ftr-text").value="";   
}