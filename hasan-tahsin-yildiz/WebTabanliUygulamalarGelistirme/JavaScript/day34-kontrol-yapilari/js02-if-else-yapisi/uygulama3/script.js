function kontrol(){
    var netSayisi=document.getElementById("netler").value;
    if(netSayisi<0){ 
        document.getElementById("ekran").innerText="Geçersiz sayı!";
      }
      else if(netSayisi<10){
        document.getElementById("ekran").innerText="Net sayınız ortalamanın altında"; 
      }
      else if(netSayisi<25){
        document.getElementById("ekran").innerText="Net sayınız ortalamaya yakın"; 
      }
      else if(netSayisi<=40){
        document.getElementById("ekran").innerText="Net sayınız ortalamanın üstünde"; 
      } 
      else{
        document.getElementById("ekran").innerText="Geçersiz sayı!"; 
       } 

}