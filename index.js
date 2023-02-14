// Demander à l'utilisateur de remplir les deux tableaux
let tab1 = [ ];
let tab2 = [ ];
for (let i = 0; i < 5; i++) {
  tab1.push(parseInt(prompt("Entrez un élément pour le tableau 1 :")));
  tab2.push(parseInt(prompt("Entrez un élément pour le tableau 2 :")));

  console.table(tab1);
  console.table(tab2);
}
// Créer un troisième tableau avec les éléments de tab1 qui ne se trouvent pas dans tab2
let tab3 = tab1.filter((el) => !tab2.includes(el));
// Créer un quatrième tableau avec les éléments de tab1 qui se trouvent dans tab2
let tab4 = tab1.filter((el) => tab2.includes(el));
// Afficher les tableaux sur la page HTML
document.write("Tableau 1 : " + tab1 + "<br>");
console.log("Tableau 1 : " + tab1);
document.write("Tableau 2 : " + tab2 + "<br>");
console.log("Tableau 2 : " + tab2);
document.write("Tableau 3 :  Les éléments du tableau 1 qui ne sont pas dans le tableau 2 : " + tab3 + "<br>");
console.log("Tableau 3 :  Les éléments du tableau 1 qui ne sont pas dans le tableau 2 : " + tab3);
document.write("Tableau 4 :  Les éléments du tableau 1 qui sont dans le tableau 2 : " + tab4 + "<br>");
console.log("Tableau 4 :  Les éléments du tableau 1 qui sont dans le tableau 2 : " + tab4);

// Trier le tableau donnée
function trierTableau(tab) {
 for (let i = 0; i < tab.length - 1; i++) {
   for (let j = i + 1; j < tab.length; j++) {
     if (tab[j] < tab[i]) {
       let temp = tab[i];
       tab[i] = tab[j];
       tab[j] = temp;
     }
   }
 }
return (tab);
}
// Trouver la valeur maximale et minimale du tableau
function trouverMaxMin(tab) {
 let max = tab[0];
 let min = tab[0];
 for (let i = 1; i < tab.length; i++) {
   if (tab[i] > max) {
     max = tab[i];
   }
   if (tab[i] < min) {
     min = tab[i];
   }
 }
 return {max: max, min: min};
}
tab1 = [5, 3, 87, 1, -4, -99, 0];
let tabTrie = trierTableau(tab1);
let maxMin = trouverMaxMin(tab1);
console.table ("Tableau trié : " + tabTrie);
console.log ("la valeur maximale du tableau : " + maxMin.max);
console.log ("la Valeur minimale du tableau : " + maxMin.min);
