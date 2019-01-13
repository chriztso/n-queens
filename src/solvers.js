/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  
  for (let i = 0; i < n; i++) {
    let template = [];
    for (let j = 0; j < n; j++) {
      template.push(0);  
    }
    template[i] = 1;
    solution.push(template);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({n:n});

  let getSolution = function(row = 0) {
    //base case: row === n when there are no more rows to check
    if(row === n){
      solutionCount++;
      return;
    }
    //recursion case
    for(let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasColConflictAt(i)) {
        getSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  
  getSolution(); 
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let board = new Board({n:n});
  let solution;
  
  let findOneSolution = function (row = 0) {
    //base case: row === n there are no more rows to check
    if (row === n) {
      solution = board;
      return;
    }
    
    //recursion case that only runs while there is no solution
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasColConflictAt(i) && !board.hasMajorDiagonalConflictAt(i - row) && !board.hasMinorDiagonalConflictAt(i + row)){
        findOneSolution(row + 1);
      }
      if (solution) {
        return;
      }
      board.togglePiece(row, i);
    }
  }
  
  findOneSolution();
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution ? solution.rows() : board.rows();
};

findNQueensSolution(4);

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({n:n});

  let getSolution = function(row = 0) {
    //base case: row === n there are no more rows to check
    if(row === n){
      solutionCount++;
      return;
    }
    //recursion case
    for(let i = 0; i < n; i++){
      board.togglePiece(row, i);
      if(!board.hasColConflictAt(i) && !board.hasMajorDiagonalConflictAt(i - row) && !board.hasMinorDiagonalConflictAt(i + row)){
        getSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  
  getSolution(); 

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
