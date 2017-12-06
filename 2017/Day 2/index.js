const fs = require('fs');

const SPREADSHEET_INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

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

    for(let i2 = 0, len = Rows[i2].length; i2 < len; i2++) {
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
console.log(answer);