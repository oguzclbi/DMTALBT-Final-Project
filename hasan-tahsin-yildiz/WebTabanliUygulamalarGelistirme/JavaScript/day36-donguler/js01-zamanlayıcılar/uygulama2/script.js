var metronom;
function melodiBaslat(){
 var notalar=["do","re","mi","fa","sol","la","si"];
 metronom=setInterval(() => {
 rastgele=Math.floor(Math.random() * 7);
 document.getElementById("potre").innerText+=notalar[rastgele] +"_";
 }, 2000);
}
function melodiDurdur(){
 clearInterval(metronom);
}