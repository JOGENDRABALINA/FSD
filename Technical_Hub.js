var c=0;
function change(){
  c=c+1;
  if (c==1){
    document.getElementsByClassName("sirpage")[0].src=("T1.jpg");
    var r=document.getElementById("circ1");
    r.style.width="30px";

  }
  
  else if (c==2){
    document.getElementsByClassName("sirpage")[0].src=("T2.jpg");
    var m=document.getElementById("circ1");
    m.style.width="10px";
    var r=document.getElementById("circ2");
    r.style.width="30px";
  }

  else if (c==3){
    document.getElementsByClassName("sirpage")[0].src=("T3.jpg");
    var m=document.getElementById("circ2");
    m.style.width="10px";
    var r=document.getElementById("circ3");
    r.style.width="30px";
  }

  else if (c==4){
    document.getElementsByClassName("sirpage")[0].src=("T4.jpg");
    var m=document.getElementById("circ3");
    m.style.width="10px";
    var r=document.getElementById("circ4");
    r.style.width="30px";
  }

  else if (c==5){
    document.getElementsByClassName("sirpage")[0].src=("T3.jpg");
    var m=document.getElementById("circ3");
    var m=document.getElementById("circ4");
    m.style.width="10px";
    var r=document.getElementById("circ5");
    r.style.width="30px";
  }
  
  else if (c==6){
    document.getElementsByClassName("sirpage")[0].src=("T2.jpg");
    var m=document.getElementById("circ3");
    var m=document.getElementById("circ5");
    m.style.width="10px";
    var r=document.getElementById("circ6");
    r.style.width="30px";
  }
 
  else{
    if (c%2==0){
        document.getElementsByClassName("sirpage")[0].src=("T1.jpg");
        var m=document.getElementById("circ6");
        m.style.width="10px";
        var r=document.getElementById("circ1");
        r.style.width="30px";
        var m=document.getElementById("circ2");
        m.style.width="10px";
    }
    else{
        document.getElementsByClassName("sirpage")[0].src=("sir page (1).jpg");
        var m=document.getElementById("circ6");
        m.style.width="10px";
        var r=document.getElementById("circ1");
        r.style.width="10px";
        var r=document.getElementById("circ2");
        r.style.width="30px";
    }
  }
}