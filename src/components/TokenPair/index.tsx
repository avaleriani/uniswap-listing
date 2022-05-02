import Image from "components/Image";
import { getTokenLogoUrl } from "utils/image";
import { Token } from "utils/fetch/fetchPools";

type TokenPairProps = {
  token0: Token;
  token1: Token;
};

const TokenPair = ({ token0, token1 }: TokenPairProps) => {
  return (
    <div className="flex">
      {token0 && token1 && (
        <>
          <div className="flex w-12 items-center flex-row">
            <div className="w-6">
              <Image
                key={token0.symbol}
                className="object-cover w-full h-full rounded-full"
                src={getTokenLogoUrl(token0.name)}
                alt={`${token0.name} token icon`}
                width="32"
                height="32"
              />
            </div>
            <div className="w-6 -ml-2">
              <Image
                key={token1.symbol}
                className="object-cover w-full h-full rounded-full"
                src={getTokenLogoUrl(token1.name)}
                alt={`${token1.name} token icon`}
                width="32"
                height="32"
              />
            </div>
          </div>
          <p className="font-semibold font-sm ml-4">
            {token0.symbol}/{token1.symbol}
          </p>
        </>
      )}
    </div>
  );
};

export default TokenPair;
