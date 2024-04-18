                   // for SIGN UP, add complete information
function Sign_up()
{
    
    checkinputs();    
}

function checkinputs()
{
    let val1 = Boolean (document.getElementById("name").value);  // check if name is entered or blank
    let val3 = Boolean (document.getElementById("pswrd").value);  // check if password is entered or blank
    let val2 = document.getElementById("email").value;
    
    val2 =  (val2.includes("@") && val2.includes(".") && !val2.includes("@.") && !val2.includes(".@"));
    
    if(val1===val2===val3===true)
    {
        swal("Great..", "Your Data is stored!", "success");           

        // swal({
        //     title: "Auto close alert!",
        //     text: "I will close in 2 seconds.",
        //     type: "success",
        //     timer: 5000
        //   });
        // swal("Great!", "Your Account has been successfully created.","success");
    }
    else
    {
        sweetAlert("Oops...", "Please Enter your complete Information!", "error"); 
    }

}

                // GO to SIGN UP page

function Log_up()
{
    window.open("index.html",'_self');
}

            // GO to LOGIN PAGE

function Sign_in()
{
    window.open("login.html",'_self');
}

            // for LOGIN, add 2-inputs

function Login()
{
    
    checkdata();    
}

function checkdata()
{
    let epass = Boolean (document.getElementById("e_pswrd").value);  // check if password is entered or blank
    console.log(epass);
    let eemail = document.getElementById("e_email").value;
    
    eemail =  (eemail.includes("@") && eemail.includes(".") && !eemail.includes("@.") && !eemail.includes(".@"));
    console.log(eemail);
    
    if(epass===true && eemail===true)
    {
        swal("Welcome..", "Successfully LOGIN", "success");           

        // swal({
        //     title: "Auto close alert!",
        //     text: "I will close in 2 seconds.",
        //     type: "success",
        //     timer: 5000
        //   });
        // swal("Great!", "Your Account has been successfully created.","success");
    }
    else
    {
        sweetAlert("Oops...","Please Enter your complete Information!", "error"); 
    }

}