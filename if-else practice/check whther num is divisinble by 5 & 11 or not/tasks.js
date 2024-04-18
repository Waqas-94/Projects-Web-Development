                    


let num = Number (prompt("Enter a number ..."));


if(num%5==0)
{
    if(num%11==0)
    document.write("Entered number "+num + " is divisible by both number (5 and 11)<br>");
    else
    document.write("Entered number "+num + " is divisible by number (5)<br>");
}
else if(num%11==0)
{
    if(num%5==0)
    document.write("Entered number "+num + " is divisible by both number (5 and 11)<br>");
    else
    document.write("Entered number "+num + " is divisible by number (11)<br>");
}

else
{
    document.write("Number is not divisible by 5 and 11<br>");
}