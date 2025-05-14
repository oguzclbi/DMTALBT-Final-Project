function modDegis(){ 
    if(document.getElementById("evet").checked==true){
       document.getElementsByTagName("body")[0].style.backgroundColor="black"; 
       document.getElementsByTagName("body")[0].style.color="white";     
    }
    else{ 
     document.getElementsByTagName("body")[0].style.backgroundColor="white";
     document.getElementsByTagName("body")[0].style.color="black";   
    }
 }