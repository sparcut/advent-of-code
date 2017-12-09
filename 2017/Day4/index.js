const fs = require('fs');

const PUZZLE_INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

// Part 1
const TestPassphrases = rawInput => {
  const phrases = rawInput
  .split(/\r\n|[\r\n]/g)
  .map( phrases => phrases.split(/ /g) );
  
  let invalidPhrases = 0;
  // For each phrase
  for(let i = 0, len = phrases.length; i < len; i++) {
    const phrase = phrases[i];
    const uniqueWords = new Map(); 
    let scanning = true;


    let i2 = 0, len2 = phrase.length;
    while(scanning) { // While still looking
      
      if(uniqueWords.has(phrase[i2])) {
        // Dupe found;
        scanning = false;
        invalidPhrases += 1;
      } else {
        uniqueWords.set(phrase[i2], true);
        
        i2++;
        if(i2 >= len2) {
          scanning = false;
        }
      }
    }
    
  }

  return (phrases.length - invalidPhrases);
}

const answer = TestPassphrases(PUZZLE_INPUT);
console.log(answer);