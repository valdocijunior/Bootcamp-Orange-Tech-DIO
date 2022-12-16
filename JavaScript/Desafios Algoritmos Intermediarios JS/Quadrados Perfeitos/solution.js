let n = parseInt(gets()); 


function minSquares(n) {
    var min = n;
    for (var i = 1; i * i <= n; i++) {
      var temp = 1 + minSquares(n - i * i);
      if (temp < min) {
        min = temp;
      }
    }
    return min;
  };


console.log(minSquares(n))