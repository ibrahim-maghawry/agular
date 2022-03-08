document.body.addEventListener("click",function(){
    var red=Math.floor(math.random()*255);
    var blou=Math.floor(math.random()*255);
    var green=Math.floor(math.random()*255);

    document.body.style.backgroundColor=`rgb(${red},${blou},${green})`;
})