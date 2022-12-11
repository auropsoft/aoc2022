const {test, real} = require('./input/day7');
const input = real
(()=>{
    const lines = input.split('\n').filter(p => !!p);
    let current = [''];
    const directories = [];
    const files = [];

    for(let line of lines) {
        if(line.indexOf('$') == 0) {
            if(line.trim() == '$ ls') continue;
            const dir = line.replace('$ cd','').trim();
            if(dir == '..') {
                current.pop();
            } else {
                current.push(dir);
                directories.push({path: current.join('/')});
            }
        } else {
            if(line.indexOf('dir') == 0) {
                //skip
                continue;
            } else {
                const split = line.trim().split(' ');
                //console.log(split);
                const size = parseInt(split[0]);
                const name = split[1].trim();
                files.push({path: current.join('/'), name, size});
            }
        }
    }
    directories.forEach((d, i) => {
        d.size = files.filter(c => c.path.indexOf(d.path) == 0 ).reduce((t,c) => t + c.size,0);
    })
    console.log(directories);
    console.log(files);
    console.log(1, directories.filter(d => d.size <= 100000).reduce((t,c) => t + c.size,0))
    const limit = 70000000
    const needed = 30000000
    const diff = needed - (limit - directories[0].size)
    const size = directories.reduce((t,c) => {
       if(c.size > diff && c.size < t) return c.size;
        return t;
    }, limit);
    console.log(2, size)
})();