const {test, real} = require('./input/day3');
// part 1
(()=>{
    const maxCapitalCharcode = 'Z'.charCodeAt(0);
    const getPriority = (char) => {
        if(!char) return 0;
        const charCode =  char.charCodeAt(0);
        return charCode <= maxCapitalCharcode ? charCode- 38 : charCode - 96;
    }
    const getDuplicate = (line)=>{
        const length = line.length;
        const part1 = line.substring(0, (length / 2));
        const part2 = line.substring(length / 2, length);

        for(let i = 0; i < part1.length; i++) {
            if(part2.indexOf(part1[i]) > -1) {
                return part1[i];
            }
        }
        return '';
    }
    const split = input.split('\n');
    let result = 0;
    split.forEach((v) => result += getPriority(getDuplicate(v)));
    console.log(result);
})();

//part 2

(()=>{
    const maxCapitalCharcode = 'Z'.charCodeAt(0);
    const getPriority = (char) => {
        if(!char) return 0;
        const charCode =  char.charCodeAt(0);
        return charCode <= maxCapitalCharcode ? charCode- 38 : charCode - 96;
    }
    const getOverlap = (l1, l2, l3)=>{
        for(let i = 0; i < l1.length; i++) {
            if(l2.indexOf(l1[i]) > -1 && l3.indexOf(l1[i]) > -1) {
                return l1[i];
            }
        }
        return '';
    }
    const split = input.split('\n').filter(line => !!line);
    let result = 0;
    for(let group = 0; group < split.length / 3; group++)
        result += getPriority(getOverlap(split[(group * 3) + 0], split[(group * 3) + 1], split[(group * 3) + 2]))
    console.log(result);
})();