import CONSTANTS from "utils/constants";

const camelCase = (str) => str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
export const getTokenLogoUrl = (symbol: string) => `${CONSTANTS.TOKEN_LOGO_URL}/${camelCase(symbol)}.png`;
