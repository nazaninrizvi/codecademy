// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = ({uniqueNum, arrayOfBases}) => ({
    specimenNumber: uniqueNum,
    dna: arrayOfBases,

    //mutate takes the dna strand, selects a random base, and changes that base.
    mutate() {
      console.log(this.dna);
      const base = Math.round(Math.random() * 15);
      //console.log(base);
      let randBase = returnRandBase();
      while(randBase === this.dna[base]){
        randBase = returnRandBase();
      }
      //console.log('the randomly generated base is ' + randBase);
      this.dna[base] = randBase;
      //console.log(this.dna);
      return this.dna;
    },

    /*
    Compares the bases between our strand and another P. aequor. Returns a percentage of similarity
    */
    compareDNA(pAequor2){
      let identical = [];
      for(let i=0; i<this.dna.length; i++){
          if(pAequor2[i] === this.dna[i]){
            identical.push(this.dna[i]);
          }
        }
      const percentage = Math.round((identical.length / this.dna.length) * 100);
      return `specimen #1 and specimen #2 have ${percentage}% DNA in common`
    },

  /*
    P.aequor are more likely to survive if they have at least 60% of Guanine and Cytosine bases
    This sees if this will survive
  */
    willLikelySurvive(){
      //console.log(this.dna);
      const likelihood = this.dna.filter(base => {
        return (base === 'C' || base === 'G')
      });
      const percentage = Math.round((likelihood.length / this.dna.length) * 100);
      //console.log('the percentage is ' + percentage + "%");
      if(percentage < 60){
        return false;
      } else {
        return true;
      }
    },

    complementStrand(){
      console.log(this.dna);
      let complement = [];
      this.dna.forEach(base => {
        switch(base){
          case 'A':
              complement.push('T');
              break;
          case 'C':
              complement.push('G');
              break;
          case 'G':
              complement.push('C');
              break;
          case 'T':
              complement.push('A');
              break;
        }
      })
      return complement;
  }
});

//create 30 instances of pAequor. Store those that can survive in their natural env in an array
let survivalArray = [];
for (let i=1; i<30; i++){
  const temp = pAequorFactory({ uniqueNum: i, arrayOfBases: mockUpStrand() });
  if(temp.willLikelySurvive()){
    survivalArray.push(temp);
  }
};

//console.log(survivalArray.length);
//console.log(pAequorFactory({ uniqueNum: '21', arrayOfBases: mockUpStrand() }));

const meany = pAequorFactory({ uniqueNum: '21', arrayOfBases: mockUpStrand() });
//console.log(meany);
//meany.mutate();
//console.log(meany.compareDNA(mockUpStrand()));
//console.log(meany.willLikelySurvive());
//console.log(meany.complementStrand());
