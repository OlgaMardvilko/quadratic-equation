module.exports = function solveEquation(equation) {
  let result = [];
  
  let numberStr = equation.split(' ').join('').match(/-?\d+/gmi);
  let a = +numberStr[0];
  let b = +numberStr[2];
  let c = +numberStr[3];
  
  let d = b*b - 4*a*c;
  
  let x1 = Math.round((-1)*b + Math.sqrt(d))/(2*a);
  let x2 = Math.round((-1)*b - Math.sqrt(d))/(2*a);
 
  if(x1<x2) {result.push(x1,x2);}
  else {result.push(x2,x1);}
  return result;
}
