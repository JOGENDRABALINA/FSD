function fun(){
   var z=document.getElementsByClassName("parent")[0];
   z.style.display="block"; 
   z.style.width="300px";

   var y=document.getElementsByClassName("child")[0];
   y.style.display="block";
}

function fun2(){
    var r=document.getElementsByClassName("parent")[0];
    r.style.width="0";

   var y=document.getElementsByClassName("child")[0];
   y.style.display="none";
}

