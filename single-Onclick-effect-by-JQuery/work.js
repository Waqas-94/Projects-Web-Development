
let count = 0;
$("#btn1").click(function(){
    if(count==0){
        $(".first").toggleClass("tree");
        count+=1;
    }
    else if(count==1){
        $(".second").toggleClass("rain");
        count+=1;
    }
    else if(count==2){
        setTimeout(function(){
            $(".second").toggleClass("rain");
            count+=1;
        },1500)
    }
    else if(count==3){
        $(".second").toggleClass("rainbow");
        count+=1;
    }
    else{
        $(".second").toggleClass("rainbow");
        $(".first").toggleClass("tree");
        count=0;
    }
})