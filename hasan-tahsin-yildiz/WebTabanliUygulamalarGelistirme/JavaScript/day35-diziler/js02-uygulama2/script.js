var ingilizce = ["apple", "bottle", "computer", "book", "mouse", "wall", "pen", "paper", "table"];
var turkce = ["elma", "şişe", "bilgisayar", "kitap", "fare", "duvar", "kalem", "kağıt", "masa"];
function cevir() {
    var siraNo;
    siraNo = ingilizce.indexOf(document.getElementById("arananKelime").value);
    if (siraNo >= 0) {
        document.getElementById("turkce").innerText = turkce[siraNo];
    }
}