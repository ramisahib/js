



document.getElementById("but").onclick = function(){


 var x = document.getElementById("x").value;
 var y = document.getElementById("y").value;
 var o = document.getElementById("o").value;
 var output = document.getElementById("output").value;
 var a = parseInt(x)
 var b = parseInt(y)
if (o == "-") 

{
    document.getElementById("output").innerText = (a-b);

 }

 else if (o == "/") 
    {    document.getElementById("output").innerText = (a/b);

    } 

else if (o == "*") 
{
document.getElementById("output").innerText = (a*b);
 }

 else 
{
document.getElementById("output").innerText = (a+b);
 }

}



        
