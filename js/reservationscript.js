const inpNavn = document.getElementById("inpNavn")
const inpEpost = document.getElementById("inpEpost")
const inpDato = document.getElementById("inpDato")
const inpAntall_personer = document.getElementById("inpAntall_personer")
const inpMelding = document.getElementById("inpMelding")
const txtSvar = document.getElementById("txtSvar")
const send = document.getElementById("send")

button.addEventListener('click',bekreftelseReservasjon)

function bekreftelseReservasjon() {
    txtSvar.innerHTML = `Tusen takk for din reservasjon, ${inpNavn.value}!<br>`
    txtSvar.innerHTML += `Du har reservert bord med dato ${inpDato.value} til ${inpAntall_personer.value} personer.<br>`
    txtSvar.innerHTML += `Vi har også mottatt følgende melding: ${inpMelding.value} <br>`
    txtSvar.innerHTML += `Vi takker igjen for reservasjonen og legger til at du også vil motta en reservasjonsbekreftelse på din epost: <br> ${inpEpost.value}`
}

function changeVisibility () {
    document.getElementById("txtSvar").style.visibility = "visible";
}

//Gjør at datoen man velger ved reservasjon må være minimum dagens dato.
let today = new Date() 
inpDato.setAttribute("min",`${today.getFullYear()}-${today.getMonth()+1}-${("0"+today.getDate()).slice(-2)}`)