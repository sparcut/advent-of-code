const fs = require('fs');

const SPREADSHEET_INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

// Part 1
const SpreadsheetChecksum = rawInput => {
  let checksum = 0;
  const Rows = rawInput
    .split(/\r\n|[\r\n]/g)
    .map(row => 
      row
        .split('\t')
        .map(val => parseInt(val))
    );
  
  for(let i = 0, len = Rows.length; i < len; i++) {
    let rowMin = Rows[i][0], // Smallest is first element
        rowMax = 0;

    for(let i2 = 0, len2 = Rows[i2].length; i2 < len2; i2++) {
      const currentCell = Rows[i][i2];

      if(currentCell < rowMin) {
        rowMin = currentCell
      }

      if(currentCell > rowMax) {
        rowMax = currentCell;
      }
    }

    checksum += (rowMax - rowMin);
  }

  return checksum;
}

const answer = SpreadsheetChecksum(SPREADSHEET_INPUT);
// console.log(answer);


// Part 2
const SpreadsheetChecksumV2 = rawInput => {
  let checksum = 0;
  const Rows = rawInput
    .split(/\r\n|[\r\n]/g)
    .map(row => 
      row
        .split('\t')
        .map(val => parseInt(val))
    );
  
  // Pretty heavy, but gets the job done...
  for(let i = 0, len = Rows.length; i < len; i++) {
    const row = Rows[i];
    for(let i2 = 0, len2 = row.length; i2 < len2; i2++) {
      const element1 = row[i2];
      for(let i3 = 0, len3 = row.length; i3 < len3; i3++) {
        const element2 = row[i3];
        if(i3 !== i2 && element1 % element2 === 0) {
          checksum += element1/element2;
        }
      }
    }
  }

  return checksum;
}

const answer2 = SpreadsheetChecksumV2(SPREADSHEET_INPUT);
console.log(answer2);
