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
  let qteextras = formObj.get("qteExtras");

  let charge = formObj.get("charge");

  //le calcul

  let gainHeure = tauxHauraire * qtetauxHauraire;
}
alert(gainHeure);
