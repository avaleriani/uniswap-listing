import TokenPair from "components/TokenPair";
import Image from "components/Image";
import { getTokenLogoUrl } from "utils/image";

const PairCard = ({ pair }) => (
  <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <h1 className="text-3xl text-black">{<TokenPair token0={pair?.token0} token1={pair?.token1} />}</h1>

    <div className="flex flex-wrap overflow-hidden text-gray-600">
      <div className="w-1/2 overflow-hidden">Token Value (USD)</div>
      <div className="w-1/2 overflow-hidden">Tx Count</div>

      <div className="w-1/2 overflow-hidden flex items-center">
        <Image
          key={pair?.token0.symbol}
          className="object-cover w-full h-full rounded-full"
          src={getTokenLogoUrl(pair?.token0.symbol)}
          alt={`${pair?.token0.name} token icon`}
          width="32"
          height="32"
        />
        {pair?.token0.name}
      </div>

      <div className="w-1/2 overflow-hidden">{pair?.token0.txCount}</div>

      <div className="w-1/2 overflow-hidden  flex items-center">
        <Image
          key={pair?.token1.symbol}
          className="object-cover w-full h-full rounded-full"
          src={getTokenLogoUrl(pair?.token1.symbol)}
          alt={`${pair?.token1.name} token icon`}
          width="32"
          height="32"
        />
        {pair?.token1.name}
      </div>

      <div className="w-1/2 overflow-hidden">{pair?.token1.txCount}</div>
    </div>
  </div>
);

export default PairCard;
