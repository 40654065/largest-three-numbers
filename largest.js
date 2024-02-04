function largest(){
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    let c=parseInt(document.getElementById("c").value);


    if(a>b){
        if(a>c){
            document.getElementById("lar").innerHTML="The Largest Number is: "+a;
        }
        else{
            document.getElementById("lar").innerHTML="The Largest Number is: "+c;
        }
    }
    else{
        if(b>c){
            document.getElementById("lar").innerHTML="The Largest Number is: "+b;
        }
        else{
            document.getElementById("lar").innerHTML="The Largest Number is: "+c;
        }
       
    }

};    

        