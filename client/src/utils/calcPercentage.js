const calcPercentage = (price, discount) => {
  let result = 0;
  if (discount > 0) {
    result = price - (price / 100) * discount;
  } else {
    result = price;
  }
  return result;
}


module.exports = calcPercentage;