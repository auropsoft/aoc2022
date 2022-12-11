const {test, real} = require('./input/day5');
const input = real
(()=>{
    const readInput = () => {
        const linesForStacks = []
        const linesForInstructions = [];
        let pointer = 0;
        for(let line of input.split('\n')) {
            if(pointer == 0 && !line) {
                pointer = 1;
            } else if(line && pointer == 0) {
                linesForStacks.push(line);
            } else if (line && pointer == 1) {
                linesForInstructions.push(line);
            }
        }
        const stacks = {};
        linesForStacks.reverse(); 
        for(let i = 1; i < linesForStacks.length; i++) {
            const l = linesForStacks[i];
            let stack = 1;
            for(let j = 0; j < l.length; j=j+4) {
                if(!stacks[stack]) stacks[stack] = [];
                if(l[j+1] != ' ') stacks[stack].push(l[j+1]);
                stack++;
            }
        }
        return {instructions: linesForInstructions, stacks};
    }
    let {instructions, stacks} = readInput();
    const process = (instruction, reverseOrder = true) => {
        const instr = instruction.replace('move','').replace('to','').replace('from','').trim().split(' ').filter(p => !!p);
        if(instr.length != 3) return;
        const count = instr[0];
        const from = instr[1];
        const to = instr[2];

        if(reverseOrder) {
            for(let i = 0; i < parseInt(count); i++) {
                stacks[to].push(stacks[from].pop());
            }
        } else {
            const c = parseInt(count);
            const crane = [];
            for(let i = 0; i < parseInt(count); i++) {
                crane.push(stacks[from].pop());
            }
            crane.reverse();
            stacks[to] = [...stacks[to], ...crane];
            
        }
    }
    //console.log(stacks)
    instructions.forEach(i => process(i));
    console.log(stacks);
    console.log('1', Object.keys(stacks).map(k => stacks[k][stacks[k].length - 1]).join(''))
    let input2 = readInput();
    instructions = input2.instructions;
    stacks = input2.stacks;
    instructions.forEach(i => process(i, false));
    console.log('2', Object.keys(stacks).map(k => stacks[k][stacks[k].length - 1]).join(''))
})();