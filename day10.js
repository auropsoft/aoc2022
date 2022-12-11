
const test = 'YWRkeCAxNQphZGR4IC0xMQphZGR4IDYKYWRkeCAtMwphZGR4IDUKYWRkeCAtMQphZGR4IC04CmFkZHggMTMKYWRkeCA0Cm5vb3AKYWRkeCAtMQphZGR4IDUKYWRkeCAtMQphZGR4IDUKYWRkeCAtMQphZGR4IDUKYWRkeCAtMQphZGR4IDUKYWRkeCAtMQphZGR4IC0zNQphZGR4IDEKYWRkeCAyNAphZGR4IC0xOQphZGR4IDEKYWRkeCAxNgphZGR4IC0xMQpub29wCm5vb3AKYWRkeCAyMQphZGR4IC0xNQpub29wCm5vb3AKYWRkeCAtMwphZGR4IDkKYWRkeCAxCmFkZHggLTMKYWRkeCA4CmFkZHggMQphZGR4IDUKbm9vcApub29wCm5vb3AKbm9vcApub29wCmFkZHggLTM2Cm5vb3AKYWRkeCAxCmFkZHggNwpub29wCm5vb3AKbm9vcAphZGR4IDIKYWRkeCA2Cm5vb3AKbm9vcApub29wCm5vb3AKbm9vcAphZGR4IDEKbm9vcApub29wCmFkZHggNwphZGR4IDEKbm9vcAphZGR4IC0xMwphZGR4IDEzCmFkZHggNwpub29wCmFkZHggMQphZGR4IC0zMwpub29wCm5vb3AKbm9vcAphZGR4IDIKbm9vcApub29wCm5vb3AKYWRkeCA4Cm5vb3AKYWRkeCAtMQphZGR4IDIKYWRkeCAxCm5vb3AKYWRkeCAxNwphZGR4IC05CmFkZHggMQphZGR4IDEKYWRkeCAtMwphZGR4IDExCm5vb3AKbm9vcAphZGR4IDEKbm9vcAphZGR4IDEKbm9vcApub29wCmFkZHggLTEzCmFkZHggLTE5CmFkZHggMQphZGR4IDMKYWRkeCAyNgphZGR4IC0zMAphZGR4IDEyCmFkZHggLTEKYWRkeCAzCmFkZHggMQpub29wCm5vb3AKbm9vcAphZGR4IC05CmFkZHggMTgKYWRkeCAxCmFkZHggMgpub29wCm5vb3AKYWRkeCA5Cm5vb3AKbm9vcApub29wCmFkZHggLTEKYWRkeCAyCmFkZHggLTM3CmFkZHggMQphZGR4IDMKbm9vcAphZGR4IDE1CmFkZHggLTIxCmFkZHggMjIKYWRkeCAtNgphZGR4IDEKbm9vcAphZGR4IDIKYWRkeCAxCm5vb3AKYWRkeCAtMTAKbm9vcApub29wCmFkZHggMjAKYWRkeCAxCmFkZHggMgphZGR4IDIKYWRkeCAtNgphZGR4IC0xMQpub29wCm5vb3AKbm9vcAo='
const real = 'YWRkeCAxCmFkZHggNQpub29wCmFkZHggLTEKbm9vcApub29wCmFkZHggNgphZGR4IDE1CmFkZHggLTkKbm9vcAphZGR4IC0xCmFkZHggNAphZGR4IDIKYWRkeCAtMjIKYWRkeCAyNwphZGR4IC0xCmFkZHggNApub29wCmFkZHggMQphZGR4IDIKbm9vcApub29wCm5vb3AKbm9vcAphZGR4IDEKYWRkeCAtMzMKYWRkeCAyCmFkZHggNQphZGR4IDIKYWRkeCAzCmFkZHggLTIKYWRkeCA3Cm5vb3AKYWRkeCAtMgphZGR4IC04CmFkZHggMTUKYWRkeCA1Cm5vb3AKbm9vcAphZGR4IC0yCmFkZHggMgpub29wCm5vb3AKYWRkeCA3CmFkZHggLTE0Cm5vb3AKYWRkeCAtMgphZGR4IC0xNwphZGR4IDUKYWRkeCAtNApub29wCmFkZHggMjMKYWRkeCAtMTgKbm9vcApub29wCm5vb3AKYWRkeCAyOAphZGR4IC0xOAphZGR4IDQKbm9vcApub29wCmFkZHggLTUKYWRkeCAxCmFkZHggMTAKYWRkeCAyCm5vb3AKbm9vcAphZGR4IC0zMAphZGR4IDMzCmFkZHggLTMyCm5vb3AKbm9vcAphZGR4IC0yCmFkZHggNgphZGR4IC0yCmFkZHggNAphZGR4IDMKYWRkeCAxOQphZGR4IDEwCmFkZHggLTUKYWRkeCAtMTYKYWRkeCAzCmFkZHggLTIKYWRkeCAxNwphZGR4IC0xOQphZGR4IDExCmFkZHggMgphZGR4IDkKbm9vcAphZGR4IC00CmFkZHggLTYKYWRkeCAtNwphZGR4IC0yNApub29wCmFkZHggNwphZGR4IC0yCmFkZHggNQphZGR4IDIKYWRkeCAzCmFkZHggLTIKYWRkeCAyCmFkZHggNQphZGR4IDIKYWRkeCA3CmFkZHggLTIKbm9vcAphZGR4IDMKYWRkeCAtMgphZGR4IDIKYWRkeCA3Cm5vb3AKYWRkeCAtMgphZGR4IC0zNAphZGR4IDEKYWRkeCAxCm5vb3AKbm9vcApub29wCmFkZHggNQpub29wCm5vb3AKYWRkeCA1CmFkZHggLTEKbm9vcAphZGR4IDYKYWRkeCAtMQpub29wCmFkZHggNAphZGR4IDMKYWRkeCA0CmFkZHggLTEKYWRkeCA1Cm5vb3AKYWRkeCA1Cm5vb3AKbm9vcApub29wCm5vb3AKbm9vcAphZGR4IDEKbm9vcApub29wCg=='

const noop = 'noop'


class Register {
    constructor() {
        this.value = 1;
        this.pending = 0;
    }

    read = () => this.value
    set = (val) => this.value = val
    setPending = (valChange) => this.pending = valChange
    readPending = () => this.pending
};

class Clock {
    constructor () {
        this.cycle = 0;
    }

    tick = () => this.cycle++
    read = () => this.cycle
}

class Output {
    constructor() {
        this.values = []
        this.screen = '';
    }

    write = (tick, value) => {
        this.values.push({tick, value});
    }

    draw = (tick, value) => {
        if(value - 1 <= (tick % 40) && value + 1 >= (tick % 40)) {
            this.screen += '██';
        } else {
            this.screen += '  ';
        }
    }
    
    getPart1 = () => {
        return this.values.reduce((t,c) => t + (c.tick * c.value), 0);
    }

    getPart2 = () => {
        let output = '';
        for(let i = 0; i < this.screen.length; i++) {
            if(i % 40 == 0)
            output += '\n';
            output += this.screen[i];
        }
        return output;
    }

}

const register = new Register();
const clock = new Clock();
const output = new Output();

const cycle = (register, clock, output,operation = null) => {
    //console.log(operation)
    if(operation && operation != noop) {
        const val = parseInt(operation.split(' ')[1]);
        //console.log(val);
        register.setPending(val);
    }

    output.draw(clock.read(), register.read());

    if((clock.read() - 20) % 40 == 0)
        output.write(clock.read(), register.read());

    if(register.readPending() && !operation) {
        register.set(register.read() + register.readPending());
        register.setPending(0);
    }
}

(() => {
    let linePointer = 0;

    const input = atob(real);
    const lines = input.split('\n').filter(p => !!p).map(p => p.trim());

while(clock.read() <= 240) {
    clock.tick();
    const line = lines[linePointer];
    if(line == noop) {
        cycle(register, clock, output, line);
        linePointer++;
    } else {
        cycle(register, clock, output, line);
        clock.tick();
        cycle(register, clock, output, null);
        linePointer++;
    }
}
console.log(1, output.getPart1());
console.log(2, output.getPart2());

})();