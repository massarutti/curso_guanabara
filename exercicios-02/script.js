function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      if (idade <= 1) {
        img.setAttribute("src", "./img/homem_bb.jpg");
        genero = "Bebe";
      } else if (idade <= 12) {
        img.setAttribute("src", "./img/homem_crianca.jpg");
        genero = "Criança";
      } else if (idade > 12 && idade <= 18) {
        img.setAttribute("src", "./img/homem_jovem.jpg");
        genero = "Jovem";
      } else if (idade <= 60) {
        img.setAttribute("src", "./img/homem_adulto.jpg");
        genero = "Homem";
      } else {
        img.setAttribute("src", "./img/homem_idoso.jpg");
        genero = "Idoso";
      }
    } else if (fsex[1].checked) {
      if (idade <= 1) {
        img.setAttribute("src", "./img/mulher_bb.jpg");
        genero = "Bebe";
      } else if (idade <= 12) {
        img.setAttribute("src", "./img/mulher_crianca.jpg");
        genero = "Criança";
      } else if (idade > 12 && idade <= 18) {
        img.setAttribute("src", "./img/mulher_jovem.jpg");
        genero = "Jovem";
      } else if (idade <= 60) {
        img.setAttribute("src", "./img/mulher_adulta.jpg");
        genero = "Mulher";
      } else {
        img.setAttribute("src", "./img/mulher_idosa.jpg");
        genero = "Idosa";
      }
    }
    img.style.borderRadius = "20px";
    img.style.maxWidth = "250px";
    img.style.marginTop = "30px";
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
