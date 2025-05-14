function mesajGonder(){
    var mesaj=document.getElementById("mesaj").value;
    var d = new Date();
    var saat=d.getHours();
    var dakika=d.getMinutes();  
    document.getElementById("mesajKutulari").innerHTML+=
          "<div class='gidenMesaj'> <img src='proﬁl.png'>"
            + mesaj +
          "<span id='tarih'>"+saat+":"+dakika+"</span></div>"; 
    document.getElementById("mesaj").value="";

}