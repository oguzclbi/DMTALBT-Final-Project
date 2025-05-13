function hangiGun() {
    var tarih = new Date();
    var gun = tarih.getDay();
    switch (gun) {
        case 0:
            alert("Pazar");
            break;
        case 1:
            alert("Pazartesi");
            break;
        case 2:
            alert("Salı");
            break;
        case 3:
            alert("Çarşamba");
            break;
        case 4:
            alert("Perşembe");
            break;
        case 5:
            alert("Cuma");
            break;
        case 6:
            alert("Cumartesi");
    }
}