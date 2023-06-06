function Labirinto(grid) {
  this.grid = grid;
}

Labirinto.prototype.encontrarCaminho = function(start, end) {
  let queue = [[start]];
  while (queue.length > 0) {
      let path = queue.shift(); 
      let pos = path[path.length-1]; 
      let direction = [
          [pos[0] + 1, pos[1]], 
          [pos[0], pos[1] + 1],
          [pos[0] - 1, pos[1]],
          [pos[0], pos[1] - 1]
      ];
      
      for (let i = 0; i < direction.length; i++) {
          if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
              path.push(direction[i]);
              return path;
          }
          
          if (direction[i][0] < 0 || direction[i][1] < 0 ||
              direction[i][0] >= this.grid[0].length || direction[i][1] >= this.grid.length) {
              continue;
          }

          if (this.grid[direction[i][0]][direction[i][1]] != 0) {
              continue;
          }

          let newPath = path.slice(); 
          newPath.push(direction[i]); 
          queue.push(newPath); 
          this.grid[direction[i][0]][direction[i][1]] = 1; 
      }
  }
  return null;
}

let labirinto = new Labirinto([
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
]);

let inicio = [0, 0];
let fim = [4, 4];

console.log(labirinto.encontrarCaminho(inicio, fim)); // Devolve o caminho para sair do labirinto
