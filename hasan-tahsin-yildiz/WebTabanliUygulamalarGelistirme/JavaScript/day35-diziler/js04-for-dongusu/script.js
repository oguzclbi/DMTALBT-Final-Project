function renkDegistir() {
    var renkler = ["red", "green", "blue", "yellow", "pink", "orange", "gray", "white"];
    var rastgele;
    var i;
    for (i = 0; i < 8; i++) {
        rastgele = Math.floor(Math.random() * 8); //0 ile 7 arasında rastgele tam sayı üretir.
        document.getElementsByTagName("div")[i].style.backgroundColor = renkler[rastgele];
    }
}