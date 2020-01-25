const bilder = document.getElementsByClassName("bildeshow");

let index = 0;
show();

function show() {
  for (let i = 0; i < bilder.length; i++) {   //Slik at ikke alle bildene vises samtidig
    bilder[i].style.display = "none";  
  }
  index++;
  if (index > bilder.length) {index = 1}        //Dersom indexen har blitt høyere enn antall bilder blir den satt ned igjen
  bilder[index-1].style.display = "block";      //Viser et av de fire bildene
  setTimeout(show, 2000);                       //Kjører på nytt med forsinkelse

}