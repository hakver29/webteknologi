const inpNavn = document.getElementById("inpNavn")
const inpEpost = document.getElementById("inpEpost")
const inpMelding = document.getElementById("inpMelding")
const txtSvar = document.getElementById("txtSvar")
const button = document.getElementById("button")

button.addEventListener('click',bekreftelseKontakt)

function bekreftelseKontakt() {
    txtSvar.innerHTML = `Takk for at du kontaktet oss, ${inpNavn.value}!<br>`
    txtSvar.innerHTML += `Vi vil sende svar til din epost, ${inpEpost.value}.<br>`
    txtSvar.innerHTML += `Dette er en bekreftelse på meldingen du skrev: ${inpMelding.value} `
}

function changeVisibility () {
    document.getElementById("txtSvar").style.visibility = "visible";
}