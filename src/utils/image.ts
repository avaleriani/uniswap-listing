import CONSTANTS from "utils/constants";

const toDashCase = (str = ``) => {
    let result = '';
    for(let item of [...str]) {
        if(item.charCodeAt(0) > 'a'.charCodeAt(0) || !Number.isNaN(+item)) {
            result += item;
        } else {
            result += `-${item.toLocaleLowerCase()}`;
        }
    }
    return result;
}

export const getTokenLogoUrl = (symbol: string) => `${CONSTANTS.TOKEN_LOGO_URL}/${toDashCase(symbol)}.png`;
