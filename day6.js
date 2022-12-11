const {test, real} = require('./input/day6');
const input = real
(()=>{
    for(let i = 4; i < input.length; i++) {
        const sub = input.substring(i-4, i);
        if(!/(.).*\1/.test(sub)) {
            console.log(1, i);
            break;
        }
    }
    for(let i = 14; i < input.length; i++) {
        const sub = input.substring(i-14, i);
        if(!/(.).*\1/.test(sub)) {
            console.log(2, i);
            break;
        }
    }
})();