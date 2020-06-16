//Deel 1: 50% korting
const age = 26;
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("helaas je bent jonger dan 18 of ouder dan 25");
}

//Deel 2: Ludieke actie!
const name = "Bram";
if (name === "Bram" || name === "Sarah") {
  console.log("kroeg bestaat 50 jaar! je krijgt een gratis biertje!");
} else {
  console.log("kroeg bestaat 50 jaar! biertje kost €0,50");
}

//Deel 3: Jubileum korting
const totalAmount = 25;
if (totalAmount >= 25) {
  console.log("gratis (vega)bitterballen.");
} else if (totalAmount >= 50) {
  console.log("gratis portie nachos.");
} else if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else {
  console.log(
    "Bij besteding van €25 gratis (vega)bitterballen, €50 gratis nachos en €100 gratis flesje champagne."
  );
}
