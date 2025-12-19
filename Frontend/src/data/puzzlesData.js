// Puzzle Data
const puzzlesData = [
  {
    title: "Puzzle 1",
    size: 7,
    blacks: [[0,0], [0,1], [0,3], [0,4], [0,5], [0,6], 
             [1,0], [1,2], [1,4], [1,5], [1,6],
             [3,0], [3,2], [3,4], [3,5], [3,6],
             [4,0], [4,1], [4,2], [4,4], [4,5], [4,6],
             [5,0], [5,1], [5,2], [5,4], [5,5], [5,6],
             [6,0], [6,1], [6,2], [6,4], [6,5], [6,6]],
    rules: [
      {
        id: 1,
        description: "Make the smallest 5-digit number where the sum of all digits is 15",
        check: (grid) => {
          const num1 = [grid[0][2], grid[1][1], grid[2][1], grid[3][1], grid[4][3]];
          if (num1.some(d => d === '' || d === 'black')) return { valid: false, current: null };
          const numStr = num1.join('');
          const sum = num1.reduce((a, b) => parseInt(a) + parseInt(b), 0);
          return { 
            valid: sum === 15 && numStr === '10149',
            current: numStr,
            sum: sum,
            expected: '10149 (sum=15)'
          };
        }
      },
      {
        id: 2,
        description: "The value of hundreds place in 5-digit number should be 100 more than the value of hundreds place in 3-digit number",
        check: (grid) => {
          const num1Hundreds = parseInt(grid[2][1]) * 100;
          const num2Hundreds = parseInt(grid[2][3]) * 100;
          if (isNaN(num1Hundreds) || isNaN(num2Hundreds)) return { valid: false, current: null };
          return { 
            valid: num1Hundreds === num2Hundreds + 100,
            current: `${num1Hundreds} vs ${num2Hundreds}`,
            expected: `${num2Hundreds + 100} (100 more than ${num2Hundreds})`
          };
        }
      }
    ],
    labels: [
      { row: 0, col: 2, text: "Number 1" },
      { row: 2, col: 0, text: "Number 2" }
    ],
    solution: [
      ['black','black','1','black','black','black','black'],
      ['black','0','black','black','black','black','black'],
      ['2','1','black','2','4','6','black'],
      ['black','4','black','black','black','black','black'],
      ['black','black','black','9','black','black','black'],
      ['black','black','black','black','black','black','black'],
      ['black','black','black','black','black','black','black']
    ]
  },
  {
    title: "Puzzle 2",
    size: 7,
    blacks: [[0,0], [0,1], [0,2], [0,4], [0,5], [0,6], 
             [1,0], [1,1], [1,4], [1,5], [1,6],
             [2,4], [2,5], [2,6],
             [4,0], [4,1], [4,2],
             [5,0], [5,1], [5,3], [5,5], [5,6],
             [6,0], [6,1], [6,2], [6,4], [6,5], [6,6]],
    rules: [
      {
        id: 1,
        description: "Make the largest 4-digit number where sum of all digits is 20",
        check: (grid) => {
          const num = [grid[0][3], grid[1][2], grid[2][2], grid[3][2]];
          if (num.some(d => d === '' || d === 'black')) return { valid: false, current: null };
          const numStr = num.join('');
          const sum = num.reduce((a, b) => parseInt(a) + parseInt(b), 0);
          return { 
            valid: sum === 20 && numStr === '9542',
            current: numStr,
            sum: sum,
            expected: '9542 (sum=20)'
          };
        }
      },
      {
        id: 2,
        description: "Make the smallest 6-digit number where the difference between largest and smallest digit is 4",
        check: (grid) => {
          const num = [grid[1][3], grid[2][3], grid[3][3], grid[4][3], grid[5][4], grid[6][3]];
          if (num.some(d => d === '' || d === 'black')) return { valid: false, current: null };
          const numStr = num.join('');
          const digits = num.map(d => parseInt(d));
          const max = Math.max(...digits);
          const min = Math.min(...digits);
          const diff = max - min;
          return { 
            valid: diff === 4 && numStr === '100004',
            current: numStr,
            diff: diff,
            expected: '100004 (diff=4)'
          };
        }
      },
      {
        id: 3,
        description: "Tens place of 6-digit number should be 3 more than ones place of 4-digit number",
        check: (grid) => {
          const sixDigitTens = parseInt(grid[5][4]);
          const fourDigitOnes = parseInt(grid[3][2]);
          if (isNaN(sixDigitTens) || isNaN(fourDigitOnes)) return { valid: false, current: null };
          return { 
            valid: sixDigitTens === fourDigitOnes + 3,
            current: `${sixDigitTens} vs ${fourDigitOnes}`,
            expected: `${fourDigitOnes + 3} (3 more than ${fourDigitOnes})`
          };
        }
      }
    ],
    labels: [
      { row: 0, col: 3, text: "Number 1" },
      { row: 1, col: 3, text: "Number 2" }
    ],
    solution: [
      ['black','black','black','9','black','black','black'],
      ['black','black','5','1','black','black','black'],
      ['8','7','4','0','black','black','black'],
      ['black','black','2','0','5','3','2'],
      ['black','black','black','0','black','black','black'],
      ['black','black','black','0','4','black','black'],
      ['black','black','black','4','black','black','black']
    ]
  }
];


export default puzzlesData;