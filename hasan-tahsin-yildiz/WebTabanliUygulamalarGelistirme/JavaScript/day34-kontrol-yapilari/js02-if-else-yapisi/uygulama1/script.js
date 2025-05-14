function reklamKaldir(){ 
    var d = new Date();
    var dakika=d.getMinutes();  
    if(dakika >= 18){       
        document.getElementById("reklam").style.display="none";
    }

}