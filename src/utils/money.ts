// From https://gist.github.com/tobyjsullivan/96d37ca0216adee20fa95fe1c3eb56ac
import BigNumber from "bignumber.js";

export const abbNumber = value => {
  let newValue = new BigNumber(value);
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;
  while (newValue.isGreaterThan(1000)) {
    newValue = newValue.dividedBy(1000);
    suffixNum++;
  }

  let result = newValue.toPrecision(3);

  result += suffixes[suffixNum];
  return result;
};
