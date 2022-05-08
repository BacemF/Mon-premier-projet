// ----------sous total de chaque article------------
var quantityTag = document.getElementsByClassName("qte"); // creer un tableau quantitytag par les valeurs de la qté
for (let index = 0; index < quantityTag.length; index++) {
  quantityTag[index].addEventListener("click", Price); // appeler la fonction price définie ci dessous à chaque click pour chaque ligne définie par index
  // console.log(quantityTag[index])
}
function Price(e) {
  var quantityTag = e.target; // prendre la valeur de quantitytag a traveur la fonction target
  // console.log(quantityTag);
  // console.log(typeof quantityTag) // pour savoir le type de la valeur quantitytag le type est string on doit le convertir en nombre
  var quantityvalue = Number(quantityTag.value); // sans innerHTML car il s'agit d'une input (innerHTML lorsqu'on est dans une balize comme <p>innerHTML</p> par exemple)
  //    console.log(quantityvalue);
  //    console.log(typeof quantityvalue); // pour savoir le type de la valeur quantityvalue
  //   quantityTag = quantityvalue; // la valeur de quantitytag prend la quantityvalue qui est un nombre et non pas string
  //   console.log(quantityTag);
  var tr_de_price = quantityTag.parentElement.parentElement; // sortir au parent de la quantity tag pour atteindre le prix unitaire
  //   console.log(tr_de_price)
  var unitpricevalue = tr_de_price.querySelector(".PrixUn").innerHTML; // prendre les valeurs des prix unitaires type string
  //   console.log(unitpricevalue)
  //   console.log(typeof unitpricevalue)
  var priceunValue = Number(unitpricevalue); // convertir les valeurs des prix unitaires type string en nombre
  //   console.log(unitpricevalue)
  //   console.log(typeof priceValue)
  var priceTag = tr_de_price.querySelector(".Prixtot"); // prendre les valeurs des prix totaux
  var priceValue = quantityvalue * priceunValue;
  priceTag.innerHTML = priceValue; // mettre la valeur de la résultat supérieure dans la balize du prix total

  // -------------sous total----------------

  var subTotal = document.querySelector(".Sub_Total"); // atteindre la ligne du sous total
  var priceTable = document.querySelectorAll(".Prixtot"); // creer un tableau avec les prix totaux (derniere colonne)
  var subTotalValue = Number(subTotal.innerHTML); // convertir subtotal en nombre (valeur parr defaut)

  for (let index = 0; index < priceTable.length; index++) {
    subTotalValue =
      Number(priceTable[0].innerHTML) +
      Number(priceTable[1].innerHTML) +
      Number(priceTable[2].innerHTML);
// subTotalValue=subTotalValue+(Number((priceTable[index]).innerHTML))
  // console.log(subTotalValue)
      //  console.log(typeof subTotalValue)
  }
subTotal.innerHTML = subTotalValue;
  // ------------ total----------------
  var totaltag = document.querySelector("#Total");
  var totalvalue = totaltag.innerHTML;
  totalvalue = Math.floor(subTotalValue * 1.19);
  totaltag.innerHTML = totalvalue;
}
