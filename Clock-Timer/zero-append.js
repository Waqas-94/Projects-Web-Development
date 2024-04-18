
// how to append zero before single digit

let a=0;

for (i=0;i<15;i++){
    a=a+1;
if(a<10)
{
    a = a.toString().padStart(2,'0');
    console.log(a);
}
else{
    console.log(a);
}
 a = parseInt(a)   // this makes that string to number
}
