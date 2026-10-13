const szamok = [4, 9, 16, 7, 12, 3];
const nevek = ['Anna', 'béla', 'Csilla', 'dávid'];
const termekek = [
{ id: 1, nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' },
{ id: 2, nev: 'Billentyűzet', ar: 14990, keszlet: 0, kategoria: 'periféria' },
{ id: 3, nev: 'Monitor', ar: 54990, keszlet: 3, kategoria: 'kijelző' },
{ id: 4, nev: 'HDMI-kábel', ar: 1990, keszlet: 40, kategoria: 'kábel' },
{ id: 5, nev: 'Webkamera', ar: 12990, keszlet: 0, kategoria: 'periféria' },
{ id: 6, nev: 'USB-C kábel', ar: 2490, keszlet: 25, kategoria: 'kábel' }
];

// 1.feladat
/*for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i]);
}*/

szamok.forEach(szam => console.log(szam));

console.log('------------------------------------');

// 2.feladat
nevek.forEach((nev, i) => console.log(`${i + 1}. ${nev}`));

console.log('------------------------------------');

// 3.feladat
const duplak = szamok.map(szam => szam * 2);
console.log(szamok);
console.log(duplak);

console.log('------------------------------------');

// 4.feladat
const nagybetuk = nevek.map(nev => nev.toUpperCase());
console.log(nevek);
console.log(nagybetuk);

console.log('------------------------------------');

// 5.feladat
const termeknevek = termekek.map(termek => termek.nev);
console.log(termeknevek);

console.log('------------------------------------');

// 6.feladat
const arcimke = termekek.map(termek => `${termek.nev} - ${termek.ar} Ft`);
console.log(arcimke);

console.log('------------------------------------');

// 7.feladat
const nagyobb = szamok.filter(t => t > 10);
console.log(nagyobb);

console.log('------------------------------------');

// 8.feladat
const paros = szamok.filter(t => t % 2 === 0);
console.log(paros);

console.log('------------------------------------');

// 9.feladat
const elfogyott = termekek.filter(termek => termek.keszlet === 0);
console.log(elfogyott);

console.log('------------------------------------');

// 10.feladat
const elso = szamok.find(szam => szam < 10);
console.log(elso);

console.log('------------------------------------');

// 11.feladat
const harmadik = termekek.find(termek => termek.id === 3);
console.log(harmadik);

const sokadik = termekek.find(termek => termek.id === 99);
console.log(sokadik);

console.log('------------------------------------');

// 12.feladat
const hol = termekek.findIndex(termek => termek.nev === "Webkamera");
console.log(hol);

const hol2 = termekek.findIndex(termek => termek.nev === "Nyomtató");
console.log(hol2);

console.log('------------------------------------');

// 13.feladat
console.log(szamok.some(t => t > 15));
console.log(szamok.some(t => t < 0));

console.log('------------------------------------');

// 14.feladat
console.log(szamok.every(t => t > 0));
console.log(szamok.every(t => t % 2 === 0));

console.log('------------------------------------');

// 15.feladat
console.log(termekek.some(termek => termek.keszlet === 0));
console.log(termekek.every(termek => termek.ar > 1000));

console.log('------------------------------------');

// 16.feladat
const osszeg = szamok.reduce((akk, szam) => akk + szam, 0);
console.log(osszeg);

console.log('------------------------------------');

// 17.feladat
const max = szamok.reduce((akk, szam) => szam > akk ? szam : akk, szamok[0]);
console.log(max);

console.log('------------------------------------');

// 18.feladat
const keszletossz = termekek.reduce((akk, termek) => akk + termek.keszlet * termek.ar, 0);
console.log(keszletossz);

console.log('------------------------------------');

// 19.feladat
console.log(szamok.sort((a, b) => a - b));
console.log(szamok.sort((a, b) => b - a));

console.log('------------------------------------');

// 20.feladat
console.log(nevek.sort((a, b) => a.localeCompare(b, "hu")));

console.log('------------------------------------');

// 21.feladat
//Írd ki a termékek nevét egy tömbben úgy, hogy a legdrágább termék neve legyen az első, a legolcsóbbé az utolsó. A termekek tömb sorrendje ne változzon.
console.log(termekek.map(termek => termek.nev).sort((a, b) => b.ar - a.ar));
