var sum = function(argv) {
  var sum = 0;

  for(var i = 2; i < argv.length; i++) {
    sum += parseInt(argv[i]);
  }

  return sum;
}

console.log(sum(process.argv));
