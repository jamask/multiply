module.exports = function multiply(first, second) {

  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();

  let d = [];
  let mult = 0;
  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      mult = firstArr[i] * secondArr[j];
      d[i + j] = (d[i + j]) ? d[i + j] + mult : mult;
    }
  }

  let mod = 0;
  let dec = 0;
  for (let i = 0; i < d.length; i++) {
    mod = d[i] % 10;
    dec = Math.floor(d[i] / 10);
    d[i] = mod;

    if (d[i + 1])
      d[i + 1] += dec;
    else if (dec != 0)
      d[i + 1] = dec;
  }


  return d.reverse().join('');


}
