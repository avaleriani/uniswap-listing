import Image from "components/Image";
import { getTokenLogoUrl } from "utils/image";
import { abbNumber } from "utils/money";

const PairCard = ({ pair }) => (
  <div className="max-w-2xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div className="flex flex-wrap overflow-hidden text-gray-600">
      <div className="w-1/3 overflow-hidden">Token</div>
      <div className="w-1/3 overflow-hidden">Tokens Value (USD)</div>
      <div className="w-1/3 overflow-hidden">Tx Count</div>

      <div className="w-1/3 overflow-hidden flex items-center">
        <Image
          key={pair?.token0.symbol}
          className="object-cover mr-2"
          src={getTokenLogoUrl(pair?.token0.symbol)}
          alt={`${pair?.token0.name} token icon`}
          width="24"
          height="24"
        />
        {pair?.token0.name}
      </div>
      <div className="w-1/3 overflow-hidden">${abbNumber(pair?.token0.totalValueLockedUSD)}</div>
      <div className="w-1/3 overflow-hidden">{abbNumber(pair?.token0.txCount)}</div>

      <div className="w-1/3 overflow-hidden  flex items-center">
        <Image
          key={pair?.token1.symbol}
          className="object-cover mr-2"
          src={getTokenLogoUrl(pair?.token1.symbol)}
          alt={`${pair?.token1.name} token icon`}
          width="24"
          height="24"
        />
        {pair?.token1.name}
      </div>
      <div className="w-1/3 overflow-hidden">${abbNumber(pair?.token1.totalValueLockedUSD)}</div>
      <div className="w-1/3 overflow-hidden">{abbNumber(pair?.token1.txCount)}</div>
    </div>
  </div>
);

export default PairCard;
