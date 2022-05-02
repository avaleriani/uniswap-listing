import CONSTANTS from "utils/constants";

const toDashCase = (str = ``) => str.replace(/\s+/g, '-').toLowerCase();

export const getTokenLogoUrl = (symbol: string) => `${CONSTANTS.TOKEN_LOGO_URL}/${toDashCase(symbol)}.png`;
