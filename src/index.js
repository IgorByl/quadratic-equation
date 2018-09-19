module.exports = function solveEquation(equation) {
  // your implementation
 let a, b, c;
   [a,b,c]= splintABC(equation);
return sorte(a,b,c);
};

function splintABC(equation){
  let a = equation.split('* x^2')[0];
  let aa = equation.split(a + '* x^2')[0];
  a = parseInt(aa + a,10);

  let bb = equation.split(a + ' * x^2 ')[1].charAt(0);
  let b = equation.split(' * x^2 ' + bb + ' ')[1].split(' * x ')[0];
  b = parseInt(bb + b,10);

  let cc = equation.split(' * x ')[1].charAt(0);
  let c = equation.split(' * x ' + cc + ' ')[1];
  c = parseInt(cc + c,10);
  return [a,b,c];
};

function sorte (a, b, c){
  let arr = []; 
  arr.push(calculateValues (a, b, c, '+'));
  arr.push(calculateValues (a, b, c, '-'));
arr.sort((a, b) => a - b);
return arr;
};

function calculateValues (a, b, c, sing){
let b1, c1, x, a1;
a1 = a*2;
b1 = parseInt(- + b,10);
c1 = Math.sqrt((b*b)-4*a*c);
if (sing === '+') {
x = Math.round((b1+c1)/a1)} else {
  x = Math.round((b1-c1)/a1)
};
return x;
};
