const test1 = 'UiA0ClUgNApMIDMKRCAxClIgNApEIDEKTCA1ClIgMgo=';
const test2 = 'UiA1ClUgOApMIDgKRCAzClIgMTcKRCAxMApMIDI1ClUgMjAK';
const real = require("./input/day9").input;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });


function ask() {
    return new Promise(resolve => {
      rl.question('Press enter to continue', input => resolve(input));
    });
  }

function draw(r, tailPositions) {
    const t = tailPositions.map(t => t.split(',').map(i => parseInt(i)));
    const bounds = [...r,...t].reduce((s,c) => {
        if(c[0] < s[0]) s[0] = c[0];
        if(c[0] > s[2]) s[2] = c[0];
        if(c[1] < s[1]) s[1] = c[1];
        if(c[1] > s[3]) s[3] = c[1];
        return s;
    }, [0,0,0,0]);
    let map = '';
    for(let y = bounds[1]; y <= bounds[3]; y++) {
        for(let x = bounds[0]; x <= bounds[2]; x++) {
            map += r.find(o => o[0] == x && o[1] == y) ? 'X' : (
                t.find(o => o[0] == x && o[1] == y) ? '#' : '.'
            )
        }
        map += '\n';
    }
    console.log(map)
}

(async ()=>{
    const input = atob(real);
    const lines = input.split('\n').filter(p => !!p);

    let h = [];

    let length = 10;

    for(let i = 0; i < length; i++)
        h.push([0,0]);
    
    const tailPositions = ["0,0"];

    for(let line of lines) {
        const dir = line[0];
        const dist = parseInt(line.replace(dir,'').trim());

        for(let i = 0; i < dist; i++) {
            switch(dir){
              case('U'): 
                    h[0][1]--;
                    break;
              case('D'): 
                    h[0][1]++;
                    break;
              case('L'): 
                    h[0][0]--;
                    break;
              case('R'): 
                    h[0][0]++;
                    break;
            }
            
            for(let i = 0; i < length - 1; i++) {
                if(Math.abs(h[i][0] - h[i+1][0]) == 2 || Math.abs(h[i][1] - h[i+1][1]) == 2) {
                    if(h[i][0] - h[i+1][0] > 0)
                        h[i+1][0]++;
                    if(h[i][0] - h[i+1][0] < 0)
                        h[i+1][0]--;
                    if(h[i][1] - h[i+1][1] > 0)
                        h[i+1][1]++;
                    if(h[i][1] - h[i+1][1] < 0)
                        h[i+1][1]--;
                        
                    if((i+1) == length - 1) 
                        tailPositions.push(`${h[i+1][0]},${h[i+1][1]}`)
                }
            }
        }
        //draw(h, tailPositions);

        //await ask()
    }
    console.log([...(new Set(tailPositions))].length)
})();