var sayac=10;
var a=setInterval(function(){
    sayac=sayac-1;
    document.getElementById("ekran").innerHTML=sayac;
    if(sayac==0){
        clearInterval(a);
    }
},3000);