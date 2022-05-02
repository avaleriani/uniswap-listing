import CONSTANTS from "utils/constants";
https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/64x64/bitcoin.png
export const getTokenLogoUrl = (symbol: string, size = 64) => `${CONSTANTS.TOKEN_LOGO_URL}/${size}x${size}/${symbol}.png`;
