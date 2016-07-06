/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

 //Ex1
function tailleString(str) {
	var result = str.length;
	return result;
}

//Ex2
function remplaceCar(str, avant, apres) {
	var result = str.replace(avant,apres);
	return result;
}

//Ex3
function concatString(str, apres) {
	var result = str.concat(apres);
	return result;
}

//Ex4
function afficherCar(str, number) {
	var result = str.charAt(number-1);
	return result;
}

//Ex5
function afficherNCar(str, number) {
	var result = str.substr(0, number);
	return result;
}

//Ex6
function majusculeString(str) {
	var result = str.toUpperCase();
	return result;
}

//Ex7
function SupprEspaceString(str) {
	var result = str.trim();
	return result;
}

//Ex8
function IsString(str) {
	var result = str.startsWith(str);
	return result;
}

//Ex9
function AfficherExtensionString(str) {
	var result = str.substr(str.lastIndexOf('j'));
	return result;
}

//Ex10
function NombreEspaceString(str) {
	var result = str.match(/[ ]/g).length;
	return result;
}

//Ex1Bonus
function InverseString(str) {
	var result = str.split("").reverse().join("");
	return result;
}

//Ex2Bonus
function minusculeString(str) {
	var result = str.toLowerCase();
	return result;
}

//Ex3Bonus
function countDistinctCar(str) {
	var result = str.match(/[ ]/g).length;
	alert(result);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

