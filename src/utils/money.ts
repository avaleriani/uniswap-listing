// From https://gist.github.com/tobyjsullivan/96d37ca0216adee20fa95fe1c3eb56ac
import BigNumber from "bignumber.js";

// Abbreviates to display big numbers with m for million, k for thousands and so on.
export const abbNumber = value => {
  if (value) {
    let newValue = new BigNumber(value);
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue.isGreaterThan(1000)) {
      newValue = newValue.dividedBy(1000);
      suffixNum++;
    }

    let result = newValue.toFormat(2);

    result += suffixes[suffixNum];
    return result;
  } else {
    return "";
  }
};
