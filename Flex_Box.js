const body=document.getElementsByTagName("body");
var table=document.getElementsByTagName("table")[0];
//table.setAttribute("style","display:none");

function generate(){
    var n=prompt("Enter a Number");
    for(var i=0;i<n;i++){
        var tr=document.createElement("tr");

        for(var j=0;j<n;j++){
           var td=document.createElement("td");
           tr.appendChild(td);
           
           td.style.border="3px solid black"
           td.style.width="100px";
           td.style.height="100px";
           td.style.borderCollapse="collapse";
        }
        table.appendChild(tr);
        table.style.border="3px solid black";
        table.style.borderCollapse="collapse";
    }
    var circle=document.createElement("div");
    circle.className="move";
    table.appendChild(circle);
    

    circle.style.height="101px";
    circle.style.width="101px";
    circle.style.backgroundColor="red";
    circle.style.position="absolute";
    circle.style.left="2px";
    circle.style.top="2px";
 
}







