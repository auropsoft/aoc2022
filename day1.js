const {test, real} = require('./input/day2');
const input = real
//part 1
(()=>{
    const split = input.split('\n\n');
    const max = split.reduce((t, c) => {
         const total = c.split('\n').reduce((t2, c2) => t2 + parseInt(c2), 0);                  return total > t ? total : t;
    }, 0);
    console.log(max);
})();

//part2
(()=>{
    const split = input.split('\n\n');
    const max = split.reduce((t, c) => {
         const total = c.split('\n').reduce((t2, c2) => t2 + parseInt(c2), 0);                  
        if(t.length < 3) {
            t.push(total);
            t.sort();
            t.reverse();
        }
        else if(t[2] < total) {
            t.push(total);
            t.sort();
            t.reverse();
            t = t.slice(0,3);
        }
        return t;
    }, []);
    console.log(max[0] + max[1] + max[2]);
})();