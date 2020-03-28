var color1=document.getElementsByName("color1")[0];
var color2=document.getElementsByName("color2")[0];
var text=document.getElementById("dytext");
var bodybg=document.body.style;
function gradientChange(){
    bodybg.background="-webkit-linear-gradient(left,"+(color1.value)+","+(color2.value)+")";
}
function colorChange(){
    text.innerText="";
    gradientChange();
    text.appendChild(document.createTextNode(bodybg.background));
};
colorChange();
color1.addEventListener("input",colorChange);
color2.addEventListener("input",colorChange);