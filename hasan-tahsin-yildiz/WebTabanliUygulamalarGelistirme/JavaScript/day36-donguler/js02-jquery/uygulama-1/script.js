$(document).ready(function () {
    $("#buton1").click(function () {
        var a = $("#aciklama").val();
        $("#icerik1").html("<h3>" + a + "</h3>");
        $("#icerik2").text(a)
    });
});