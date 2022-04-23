var resimler = document.getElementsByTagName("img");

var div1 = document.getElementById("div1");

for (i = 0; i < 4; i++) {
  document.write(div1.innerHTML);
}

for (i = 0; i < resimler.length; i++) {
  resimler[i].src = "https://source.unsplash.com/random/250x" + Number(243 + i);
}
