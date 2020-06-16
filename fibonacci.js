function fibonacciGenerator (n) {
  var output = [0,1];
  for (var count = 0; count<n;count++){
    var newVariable = output[count] + output[count+1];
    output.push(newVariable);

  }
  return output.slice(0,n);
}
fibonacciGenerator (5);
