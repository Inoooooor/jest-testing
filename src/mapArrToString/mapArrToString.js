const mapArrToString = (arr = []) =>
  arr.filter((item) => Number.isInteger(item)).map(String)

module.exports = mapArrToString
