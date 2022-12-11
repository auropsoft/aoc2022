const {test, real} = require('./input/day2');
const input = real
//part 1
(()=>{
    const scores = {
        AX: 4,
        AY: 8,
        AZ: 3,
        BX: 1,
        BY: 5,
        BZ: 9,
        CX: 7,
        CY: 2,
        CZ: 6
    }
    const calculateScore = (a, b) => (scores[`${a}${b}`] || 0);
    const split = input.split('\n');
    const score = split.reduce((t, c) => {
         const row = c.split(' ');
        return t + calculateScore(c[0],c[2]);
    }, 0);
    console.log(score);
})();

//part 2
(()=>{
    const scores = {
        AX: 4,
        AY: 8,
        AZ: 3,
        BX: 1,
        BY: 5,
        BZ: 9,
        CX: 7,
        CY: 2,
        CZ: 6
    }
    const reactions = {
        AX: 'Z',
        AY: 'X',
        AZ: 'Y',
        BX: 'X',
        BY: 'Y',
        BZ: 'Z',
        CX: 'Y',
        CY: 'Z',
        CZ: 'X'
    }
    const calculateScore = (a, b) => (scores[`${a}${reactions[`${a}${b}`]}`] || 0);
    const split = input.split('\n');
    const score = split.reduce((t, c) => {
         const row = c.split(' ');
        return t + calculateScore(c[0],c[2]);
    }, 0);
    console.log(score);
})();