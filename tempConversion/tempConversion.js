const ftoc = function (faren) {
  let cels = (faren - 32) * (5 / 9);
  return Math.round(cels * 10) / 10;
}

const ctof = function (cels) {
  let faren = cels * (9 / 5) + 32;
  return Math.round(faren * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
