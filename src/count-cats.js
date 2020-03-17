module.exports = function countCats(matrix) {
  
  let x = 0
  for(let i =0; i <= matrix.length - 1; i++ ){
    matrix[i].forEach(el => {
      if(el === '^^'){
        x += 1
      }
    });
  }
  return x
};
