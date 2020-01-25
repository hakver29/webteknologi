
//Henter footer-id og header -id fra alle html.sider
const footer = document.querySelector("#footer")
const header = document.querySelector("#header")


header.innerHTML = `<link rel="stylesheet" type="text/css" href="css/main.css">

<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <div class="logo">Pizza Milano</div>
  <div id = "navSite">
  <a href="index.html">HJEM</a>
  <a href="menu.html">MENY</a>
  <a href="takeaway.html">TAKEAWAY</a>
  <a href="reservation.html">BORDBESTILLING</a>
  <a href="about.html">OM OSS</a>
  <a href="contact.html">KONTAKT OSS</a>
  
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  </div>
</div> `


footer.innerHTML = `
<link rel="stylesheet" type="text/css" href="css/main.css">

          <!-- FOOTER START -->
          <div class="footer">
            <div class="contain">
            <div class="col">
                    <h6>Kontakt oss</h6>
                    <p class="text-justify">
                        Adresse: Pizzavegen 22, Norge
                        <br>
                        Telefon: 12345678
                        <br>
                        E-post: post@pizzamilno.no
                    </p>
            </div>
            <div class="col">
              <h6>Våre pizza</h6>
              <p></p>
              <ul>
                    <li><a href="takeaway.html" >SKINKE</a></li>
                    <li><a href="takeaway.html">PEPPERONI</a></li>
                    <li><a href="takeaway.html">MILANO SPESIAL</a></li>
                    <li><a href="takeaway.html">BIFF</a></li>
              </ul>
            </div>
            <div class="col">
              <h6>pizzamilano.no</h6>
              <p></p>
              <ul>
                    <li><a href="index.html" >HJEM</a></li>
                    <li><a href="menu.html">MENY</a></li>
                    <li><a href="reservation.html">BORDBESTILLING</a></li>
                    <li><a href="takeaway.html">TAKEAWAY</a></li>

              </ul>
            </div>
            
        </div>
        <div class="clearfix">
                Kopirett pizzamilano.no
            </div>
        </div>
          <!-- END OF FOOTER --></div>`


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  

