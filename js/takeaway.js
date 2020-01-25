
const btnLeggTilPizza = document.getElementById("btnLeggTilPizza")
const btnBetaling = document.getElementById("btnBetaling")
const txtHandlekurv = document.getElementById("txtHandlekurv")
const pizza1 = document.getElementById("pizza1")
const pizza2 = document.getElementById("pizza2")
const pizza3 = document.getElementById("pizza3")
const pizza4 = document.getElementById("pizza4")
const romme = document.getElementById("romme")
const hvitlok = document.getElementById("hvitlok")
const radVipps = document.getElementById("radVipps")
const radKort = document.getElementById("radKort")
const bestillingsbekreftelse = document.getElementById("bestillingsbekreftelse")
const infoBestilling = document.getElementById("infoBestilling")
const imgForhandsvisning = document.getElementById("imgForhandsvisning")
const bestilling = document.getElementById("bestilling")
const tidIgjen = document.getElementById("tidIgjen")

const bilder = [{src:"img/pizza1.jpeg", name: "pizza1"},
{src:"img/pizza2.jpeg", name: "pizza2"},
{src:"img/pizza3.jpeg", name: "pizza3"},
{src:"img/pizza4.jpeg", name: "pizza4"}]

//Gir bildet i forhåndsvisningen verdier med en gang siden åpnes
imgForhandsvisning.src = bilder[0].src 
imgForhandsvisning.alt = bilder[0].name
imgForhandsvisning.value = "159"

pizza1.addEventListener("click", event => {imgForhandsvisning.src = bilder[0].src, imgForhandsvisning.alt = bilder[0].name, imgForhandsvisning.value = "159"})
pizza2.addEventListener("click", event => {imgForhandsvisning.src = bilder[1].src, imgForhandsvisning.alt = bilder[1].name, imgForhandsvisning.value = "190"})
pizza3.addEventListener("click", event => {imgForhandsvisning.src = bilder[2].src, imgForhandsvisning.alt = bilder[2].name, imgForhandsvisning.value = "168"})
pizza4.addEventListener("click", event => {imgForhandsvisning.src = bilder[3].src, imgForhandsvisning.alt = bilder[3].name, imgForhandsvisning.value = "130"})

btnLeggTilPizza.addEventListener("click", leggTilPizza)
btnBetaling.addEventListener("click", bestill)

let arrHandlekurv = []

function leggTilPizza(){
    let pizza = {navn: imgForhandsvisning.alt, pris: imgForhandsvisning.value}
    arrHandlekurv.unshift(pizza)
    fyllHandleliste() 
}

function fyllHandleliste(){
    txtHandlekurv.innerHTML=""
    for(let i=0; i < arrHandlekurv.length; i++){
        let liste = document.createElement("li")
        liste.id = i
        liste.innerHTML = arrHandlekurv[i].navn+", "+ arrHandlekurv[i].pris + "kr"
        let knapp = document.createElement("button")
        knapp.type = "submit"
        knapp.id = i
        knapp.innerHTML = "Slett"
        knapp.addEventListener("click", slettPizza)
        liste.appendChild(knapp)
        txtHandlekurv.appendChild(liste)  
    }
}

function slettPizza(){
    const id = Number(this.id)
    arrHandlekurv.splice(id,1)
    const liste = document.querySelectorAll("li")
    txtHandlekurv.removeChild(liste[id])
    fyllHandleliste()
}

function bestill(){
    if(arrHandlekurv.length === 0){
        alert("Du må velge en pizza!")
    }
    else if(romme.value > 10 || hvitlok.value > 10){
        alert("Du kan velge max 10 av en type dressing.")
    
    }
    else{
    
    bestillingsbekreftelse.style.border = "solid #f44336 5px"
    bestillingsbekreftelse.style.textAlign = "center"
    infoBestilling.innerHTML = ""

    const navn = document.createElement("label")
    navn.innerHTML = "Skriv inn navn:"
    const inpNavn = document.createElement("input")
    inpNavn.type = "text"
    inpNavn.id = "inpNavn"
    inpNavn.required = true
    navn.appendChild(inpNavn)
    infoBestilling.appendChild(navn)
    const br = document.createElement("br")
    infoBestilling.appendChild(br)
    const adresse = document.createElement("label")
    adresse.innerHTML = "Adresse: "
    const inpAdresse = document.createElement("input")
    inpAdresse.type = "text"
    inpAdresse.id = "inpAdresse"
    inpAdresse.required = true
    adresse.appendChild(inpAdresse)
    infoBestilling.appendChild(adresse)
    inpAdresse.addEventListener("change", bekreftelse) 
    } 
}

function bekreftelse(){
    tidIgjen.style.visibility = "visible"
    tidIgjen.style.animationPlayState = "running"

    const inpNavn = document.getElementById("inpNavn")
    const inpAdresse = document.getElementById("inpAdresse")

    bestilling.innerHTML = "Du har bestilt: "

    let pris = 0;
    for(let pizza in arrHandlekurv){
        bestilling.innerHTML+= arrHandlekurv[pizza].navn + " "
        pris = pris + Number(arrHandlekurv[pizza].pris)
    
    }
    if(romme.value>0){
        bestilling.innerHTML += " + " + romme.value + " rømmedressing<br>"
        pris = pris + Number(romme.value * 20)
    }
    if(hvitlok.value>0){
        bestilling.innerHTML += " + " + hvitlok.value + " hvitløksdressing<br>"
        pris = pris + Number(hvitlok.value * 20)
    }
    if(radVipps.checked){
        bestilling.innerHTML += "Betalingsmåten som er valgt er Vipps. </br> "
    }
    else if(radKort.checked){
        bestilling.innerHTML += "Betalingsmåten som er valgt er kort. </br> "
    }

    bestilling.innerHTML += "Pris: " + pris + "kr."

    bestilling.innerHTML += "<br>Takk for din bestilling, " + inpNavn.value + "! Maten vil bli sendt til adressen " + inpAdresse.value + " om ca 30 min."
    
}