let sepet = [];

function sepeteEkle(urunAdi, urunFiyat, urunResim) {
    const urun = {
        adi: urunAdi,
        fiyat: Number(urunFiyat),
        resim: urunResim
    };
    sepet.push(urun);
    alert({ urunAdi } + "sepete eklendi!")
    gosterSepet();
}

function gosterSepet() {
    const sepetDiv = document.getElementById("sepet-icerik");

    if (sepet.length === 0) {
        sepetDiv.textContent = "Sepetiniz Boş";
    }
    else {
        let toplam = sepet.reduce((sum, item) => sum + item.fiyat, 0)
    
    let liste = `<ul>` +

        sepet.map(item => `
            <li>
                <img src="${item.fiyat}" alt="${item.adi}">
                ${item.adi} - ${item.fiyat}TL
            </li>
        `).join('') +

        `< ul > `;
    sepetDiv.innerHTML = `${liste}<p><strong>Toplam:
                ${toplam.toFixed(2)}TL</strong></p>`;
    }
}