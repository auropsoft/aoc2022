const {test, real} = require('./input/day8');
const input = real
(()=>{
    const lines = input.split('\n').filter(p => !!p);
    const grid = lines.map(l => l.trim().split('').map(i => parseInt(i)));
    const visiGrid = [];
    
    let visible = 0;
    let size = lines.length;

    const isVisible = (xt,yt) => {
      const height = grid[yt][xt];
      let hiddenSides = 0; 
        let scores = [];
      for(y = yt - 1; y >= 0; y--) {
        if(grid[y][xt] >= height)
        {
            hiddenSides++;
            scores.push(yt-y);
            break;
        }
      }
      if(scores.length < 1) scores.push(yt);
      for(y = yt + 1; y < size; y++) {
        if(grid[y][xt] >= height)
        {
            hiddenSides++;
            scores.push(y-yt);
            break;
        }
      }
      if(scores.length < 2) scores.push(size-(yt+1));
      for(x= xt - 1; x >= 0; x--) {
        if(grid[yt][x] >= height)
        {
            hiddenSides++;
            scores.push(xt-x);
            break;
        }
      }
      if(scores.length < 3) scores.push(xt);
      for(x = xt + 1; x < size; x++) {
        if(grid[yt][x] >= height)
        {
            hiddenSides++;
            scores.push(x-xt);
            break;
        }
      }
      if(scores.length < 4) scores.push(size-(xt+1));
        console.log(xt,yt,scores)
    return [hiddenSides == 4 ? 0 : 1, scores[0] * scores[1] * scores[2] * scores[3]];
    }
    for(let y = 1; y < size - 1; y++) {
        visiGrid[y] = [];
        for(let x = 1; x < size - 1; x++) {
            const visi = isVisible(x,y);
            visible += visi[0];
            visiGrid[y][x] = visi[1];
        }
    }
    console.log(visiGrid);
    console.log(1, visible + (4 * (size - 1)));
    console.log(2, visiGrid.reduce((tr,r) => {
      const cr = r.reduce((t,c) => (c || 0) > t ? c : t,0) || 0
      return cr > tr ? cr : tr;
    }, 0))
})();