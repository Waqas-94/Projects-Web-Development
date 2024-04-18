                    


let num = Number (prompt("Enter a Month Number (1~12) ..."));


if(num==1||num==3||num==5||num==7||num==8||num==10||num==12)
{
    document.write("This MONTH has 31 days...<br>");
}
else if(num==2)
{
    document.write("This MONTH has 28 or 29 days...<br>");
}
else if(num==4||num==6||num==9||num==11)
{
    document.write("This MONTH has 30 days...<br>");
}
else
{
    document.write("Enter a value within range...<br>");
}