var ortalamalar=[];
var matematik=[60,90,100];
var tarih=[80,80];
var fizik=[100,90,75];

ort1=(matematik[0]+matematik[1]+matematik[2])/3;
ort2=(tarih[0]+tarih[1])/2;
ort3=(fizik[0]+fizik[1]+fizik[2])/3;
ortalamalar.push(ort1);
ortalamalar.push(ort2);
ortalamalar.push(ort3);

var genelOrtalama=0;
genelOrtalama=(ortalamalar[0]+ortalamalar[1]+ortalamalar[2])/3;
alert(genelOrtalama);