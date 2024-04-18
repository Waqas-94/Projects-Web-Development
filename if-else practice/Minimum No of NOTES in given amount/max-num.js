

// a=10;  b=20  ; c=50  ; d=100;  e=500;  f=1000;  g=5000

let num = Number (prompt("Enter Amount"));




// if(num>=5000)
// {
//     let g = parseInt(num/5000);        // no of 5000 notes
//     let deci_part1 = num-(g*5000);    // for Note 1000

//     let f = parseInt(deci_part1/1000);      // no of 1000 notes
//     let deci_part2 = deci_part1-(f*1000);    // for Note 500

//     let e = parseInt(deci_part2/500);        // no of 500 notes
//     let deci_part3 = deci_part2-(e*500);    // for Note 100
    
//     let d = parseInt(deci_part3/100);       // no of 100 notes
//     let deci_part4 = deci_part3-(d*100);    // for Note 50

//     let c = parseInt(deci_part4/50);         // no of 50 notes
//     let deci_part5 = deci_part4-(c*50);    // for Note 20

//     let b = parseInt(deci_part5/20);        // no of 20 notes
//     let deci_part6 = deci_part5-(b*20);    // for Note 10
    
//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    


//     document.write("Entered "+num + " has <br>" +"5000 x "+g +" <br>"+ " 1000 x "+f+" <br>"+ " 500 x "+e+" <br>"+
//      " 100 x "+d+" <br>"+ " 50 x "+c+" <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }

// else if(num>=1000 && num<5000)
// {

//         let f = parseInt(num/1000);      // no of 1000 notes
//         let deci_part2 = num-(f*1000);    // for Note 500
    
//         let e = parseInt(deci_part2/500);        // no of 500 notes
//         let deci_part3 = deci_part2-(e*500);    // for Note 100
    
//         let d = parseInt(deci_part3/100);       // no of 100 notes
//         let deci_part4 = deci_part3-(d*100);    // for Note 50
    
//         let c = parseInt(deci_part4/50);         // no of 50 notes
//         let deci_part5 = deci_part4-(c*50);    // for Note 20
    
//         let b = parseInt(deci_part5/20);        // no of 20 notes
//     let deci_part6 = deci_part5-(b*20);    // for Note 10
    
//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    


//     document.write("Entered "+num + " has <br>"+ " 1000 x "+f+" <br>"+ " 500 x "+e+" <br>"+
//     " 100 x "+d+" <br>"+ " 50 x "+c+" <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }

// else if(num>=500 && num<1000)
// {
    
//     let e = parseInt(num/500);        // no of 500 notes
//     let deci_part3 = num-(e*500);    // for Note 100
    
//     let d = parseInt(deci_part3/100);       // no of 100 notes
//     let deci_part4 = deci_part3-(d*100);    // for Note 50
    
//     let c = parseInt(deci_part4/50);         // no of 50 notes
//     let deci_part5 = deci_part4-(c*50);    // for Note 20

//     let b = parseInt(deci_part5/20);        // no of 20 notes
//     let deci_part6 = deci_part5-(b*20);    // for Note 10

//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    


//     document.write("Entered "+num + " has <br>"+ " 500 x "+e+" <br>"+
//     " 100 x "+d+" <br>"+ " 50 x "+c+" <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }


// else if(num>=100 && num<500)
// {
    
//     let d = parseInt(num/100);       // no of 100 notes
//     let deci_part4 = num-(d*100);    // for Note 50

//     let c = parseInt(deci_part4/50);         // no of 50 notes
//     let deci_part5 = deci_part4-(c*50);    // for Note 20

//     let b = parseInt(deci_part5/20);        // no of 20 notes
//     let deci_part6 = deci_part5-(b*20);    // for Note 10

//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    



//     document.write("Entered "+num + " has <br>"+  " 100 x "+d+" <br>"+ " 50 x "+c+" <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }

// else if(num>=50 && num<100)
// {
    
//         let c = parseInt(num/50);         // no of 50 notes
//     let deci_part5 = num-(c*50);    // for Note 20

//     let b = parseInt(deci_part5/20);        // no of 20 notes
//     let deci_part6 = deci_part5-(b*20);    // for Note 10

//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    


//     document.write("Entered "+num + " has <br>"+ " 50 x "+c+" <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }

// else if(num>=20 && num<10)
// {
    
//     let b = parseInt(num/20);        // no of 20 notes
//     let deci_part6 = num-(b*20);    // for Note 10
    
//     let a = parseInt(deci_part6/10);        // no of 10 notes
//     let deci_part7 = deci_part6-(a*10);    


//     document.write("Entered "+num + " has <br>"+ " 20 x "+b+" <br>"+ " 10 x "+a+" <br>");
// }


// else if(num>=10 && num<20)
// {
        
//         let a = parseInt(num/10);        // no of 10 notes
//         let deci_part7 = num-(a*10);    
    
    
//         document.write("Entered "+num + " has <br>"+ " 10 x "+a+" <br>");
// }

// else
// {
//     document.write("You Entered less than RS.10 or non-numeric number... ");
// }



// CHATGPT


// function calculateMinimumNotes(amount) {
//     // Define currency denominations
//     const denominations = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

//     // Initialize an object to store the count of each denomination
//     const notesCount = {};

//     // Iterate through denominations
//     for (let denomination of denominations) {
//         // Calculate the number of notes of current denomination
//         const count = Math.floor(amount / denomination);
        
//         // Update the amount remaining after considering current denomination
//         amount %= denomination;
        
//         // Store the count of current denomination
//         notesCount[denomination] = count;
//     }

//     // Print the result
//     console.log("Minimum number of notes needed:");
//     for (let denomination of denominations) {
//         if (notesCount[denomination] > 0) {
//             console.log(`${denomination}: ${notesCount[denomination]}`);
//         }
//     }
// }

// // Test cases
// calculateMinimumNotes(5560); // Test with an amount


