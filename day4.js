const {test, real} = require('./input/day4');
const input = real
(()=>{
    const getCompleteOverlap = (line) => {
        const pair = line.trim().split(',');
        const p1 = pair[0].split('-').map(i => parseInt(i));
        const p2 = pair[1].split('-').map(i => parseInt(i));
        if((p1[0] <= p2[0] && p1[1] >= p2[1]) || (p1[0] >= p2[0] && p1[1] <= p2[1]))
            return 1;
        return 0;
    }
    const getAnyOverlap = (line) => {
        const pair = line.trim().split(',');
        const p1 = pair[0].split('-').map(i => parseInt(i));
        const p2 = pair[1].split('-').map(i => parseInt(i));
        if((p1[0] < p2[0] && p1[1] < p2[0]) || (p1[0] > p2[1] && p1[1] > p2[1]))
            return 0;
        return 1;
    }
    const split = input.split('\n').filter(line => !!line);
    let resultPart1 = 0;
    let resultPart2 = 0;
    split.forEach((v) => resultPart1 += getCompleteOverlap(v));
    split.forEach((v) => resultPart2 += getAnyOverlap(v));
    console.log({resultPart1, resultPart2});
})();