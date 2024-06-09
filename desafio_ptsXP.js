let nome = "Jonas";
let pontosXP= 7000
let nivel = "";

if (pontosXP <= 1000) {nivel = "Ferro"}
else if (pontosXP >= 1001 && pontosXP <= 2000) {nivel = "Bronze"}
else if (pontosXP >= 2001 && pontosXP <=  5000) {nivel = "Prata"}
else if (pontosXP >= 5001 && pontosXP <= 7000) {nivel = "Ouro"}
else if (pontosXP >= 7001 && pontosXP <= 8000) {nivel = "Platina"}
else if (pontosXP >= 8001 && pontosXP <= 9000) {nivel = "Ascendente"}
else if (pontosXP >= 9001 && pontosXP <= 10000) {nivel = "Imortal"}
else if (pontosXP >= 10000) {nivel = "Radiante"}

console.log("O Herói de nome "+ nome + " está no nível de " + nivel)