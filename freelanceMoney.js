function CalculGain() {
  //on récupère le formulaire dans html

  let myForm = document.getElementById("FormCalculGain");

  //on transform en objet form datqa

  let formObj = new FormData(myForm);

  // on récupère les valeur des input
  let tauxHauraire = formObj.get("th");
  let tauxjournalier = formObj.get("tjm");
  let extras = formObj.get("extras");
  let qtetauxHauraire = formObj.get("qteTh");
  let qtetauxjournalier = formObj.get("qteTjm");
  let qteExtras = formObj.get("qtExtras");

  let charges = formObj.get("charges");

  //le calcul

  let gainHeure = tauxHauraire * qtetauxHauraire;
  let gainJour = tauxjournalier * qtetauxjournalier;
  let gainExtras = extras * qteExtras;

  let totalBrut = gainHeure + gainJour + gainExtras;

  let chargeADeduire = (totalBrut * charges) / 100;

  let totalNet = totalBrut - chargeADeduire;

  document.getElementById("resultaBrut").innerText = totalBrut.toFixed(2) + "€";
  document.getElementById("Adeduire").innerText =
    chargeADeduire.toFixed(2) + "€";
  document.getElementById("resultaNet").innerText = totalNet.toFixed(2) + "€";
}

//Ajout des évènements
let btn = document.getElementById("buttonValidation");
btn.addEventListener("click", CalculGain);

let mesInputs = document.querySelectorAll(" input.form-control ");

mesInputs.forEach((monInput) => {
  monInput.addEventListener("keyup", CalculGain);
  monInput.addEventListener("change", CalculGain);
});
CalculGain();
