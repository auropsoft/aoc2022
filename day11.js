const test = require('./input/day11').test;
const real = require('./input/day11').real;
const regex = /.+ (\d):\n.*: ([\d, ]+)\n.*= ([\w\d]+) ([+*]) ([\w\d]+)\n.+ (\d+)\n.+ (\d+)\n.+ (\d+)/gm

const input = real;
const lines = input.split('\n\n').filter(p => !!p).map(p => p.trim());

let monkeys = [];

class Monkey {
    constructor(n, items, operation1, operation2, operation, divisibility, divisibleTrue, divisibleFalse) {
        this.n = n;
        this.items = items;
        this.originalItems = [...items];
        this.operation1 = operation1;
        this.operation2 = operation2;
        this.operation = operation;
        this.divisibility = divisibility;
        this.divisibleTrue = divisibleTrue;
        this.divisibleFalse = divisibleFalse;
        this.inspections = 0;
        this.factor = 1;

        const buildFunction = (() => {
            if(this.operation == '*')
                return (num) => (operation1 == 'old' ? num : parseInt(operation1)) * (operation2 == 'old' ? num : parseInt(operation2));
            if(this.operation == '+')
                return (num) => (operation1 == 'old' ? num : parseInt(operation1)) + (operation2 == 'old' ? num : parseInt(operation2));
        })();
        this.processFunction = buildFunction;
    }

    catch(item) {
        this.items.push(item);
    }

    process(worryDivision) {
        while(this.items.length > 0) {
            const item = this.items.shift();
            const newNum = Math.floor(this.processFunction(item) / worryDivision) % this.factor;
            this.inspections++;
            const newMonkeyNum = (newNum % this.divisibility == 0) ? this.divisibleTrue : this.divisibleFalse;
            const monkey = monkeys.find(m => m.n == newMonkeyNum);
            monkey.catch(newNum);
        }
    }

    reset() {
        this.inspections = 0;
        this.items = [...this.originalItems];
    }
}

const initMonkeys = () => {
    monkeys = [];
    for(let line of lines) {

        const match = (new RegExp(regex)).exec(line);
        monkeys.push(new Monkey(
            parseInt(match[1]),
            match[2].split(',').map(p => p.trim()).filter(p => !!p).map(p => parseInt(p)),
            match[3],
            match[5],
            match[4],
            parseInt(match[6]),
            parseInt(match[7]),
            parseInt(match[8]),
        ))
    }
    const factor = monkeys.reduce((t,c) => t * c.divisibility,1);
    monkeys.forEach(m => m.factor = factor);
    console.log(factor);
}

initMonkeys();

for(let i = 0; i < 20; i++) {
    monkeys.forEach(m => m.process(3));
    if(i === 19) {
        const monkeyBusiness = monkeys.map(m => m.inspections);
        monkeyBusiness.sort((a,b) => b-a);
        console.log(monkeyBusiness)
        console.log(1, monkeyBusiness[0] * monkeyBusiness[1]);
    }
}
initMonkeys();

for(let i = 0; i < 10000; i++) {
    monkeys.forEach(m => m.process(1));
    if(((i + 1) % 1000 === 0) || i == 19 || i == 0) {
        const monkeyBusiness = monkeys.map(m => m.inspections);
        monkeyBusiness.sort((a,b) => b-a);
        console.log(monkeyBusiness)
        if(i === 9999) 
            console.log(2, monkeyBusiness[0] * monkeyBusiness[1]);
    }
}