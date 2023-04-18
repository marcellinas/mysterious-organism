// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (specimenNum, dna) => {
return {
 specimenNum,
 dna,
 mutate() {
const index = Math.floor(Math.random() * 15);
let base = returnRandBase();
while (this.dna[index] === base) {
  base = returnRandBase();
}
this.dna[index] = base;
return this.dna;
 },
 compareDNA(pAequorObj) {
   let identical = 0;
for (let i = 0; i < 15; i++) {
  if (this.dna[i] === pAequorObj.dna[i]) {
    identical ++;
  }
}
const percentage = identical / 15 * 100;
console.log(`specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
 },
 willLikelySurvive() {
const cOrG = this.dna.filter(el => el === 'C' || el === 'G');
return cOrG.length / 15 >= 0.6;
 },
 complementStrand() {
   let strand = [];
    this.dna.forEach(el => { switch (el) {
     case 'A':
     strand.push('T');
     break;
     case 'T':
     strand.push('A');
     break;
     case 'C':
     strand.push('G');
     break;
     case 'G':
     strand.push('C');
     break;
   }})
   return strand;
 }
}
}


let survivingInstances = [];
let num = 1;
while (survivingInstances.length < 30) {
  let newOrg = pAequorFactory(num, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingInstances.push(newOrg);
  }
  num++;
}


//const test1 = pAequorFactory(1, mockUpStrand());
//const test2 = pAequorFactory(2, mockUpStrand());
//console.log(test1.mutate())
//test1.compareDNA(test2)
//console.log(test1.willLikelySurvive())
//console.log(survivingInstances)
//console.log(test1.complementStrand())
