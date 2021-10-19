import CONSTANTS from "utils/constants";

export const getTokenLogoUrl = (symbol: string, size = 64) => `${CONSTANTS.TOKEN_LOGO_URL}/${symbol}/${size}x${size}`;
