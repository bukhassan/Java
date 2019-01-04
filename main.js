setTimeout (popup, 10000)

function popup() {
var txt= confirm ('hey, wanna have some fun? click down')
if (txt==true) { 
location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');}
else { 
text=null;
}
document.getElementById("demo").innerHTML = txt;
}
