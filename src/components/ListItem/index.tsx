import Image from "components/Image";
import { getTokenLogoUrl } from "utils/image";
import { BigNumber } from "bignumber.js";
import { Pool } from "utils/fetcher";

type ListItemProps = {
  item: Pool;
};

const ListItem = ({ item }: ListItemProps) => (
  <tr key={item.id} className="text-white">
    <td className="px-4 py-3 border">
      <div className="flex">
        <div className="flex w-12 items-center flex-row">
          <div className="w-6">
            <Image
              key={item.token0.symbol}
              className="object-cover w-full h-full rounded-full"
              src={getTokenLogoUrl(item.token0.symbol)}
              alt={`${item.token0.name} token icon`}
              width="32"
              height="32"
            />
          </div>
          <div className="w-6 -ml-2">
            <Image
              key={item.token1.symbol}
              className="object-cover w-full h-full rounded-full"
              src={getTokenLogoUrl(item.token1.symbol)}
              alt={`${item.token1.name} token icon`}
              width="32"
              height="32"
            />
          </div>
        </div>
        <p className="font-semibold font-sm ml-4">
          {item.token0.symbol}/{item.token1.symbol}
        </p>
      </div>
    </td>
    <td className="px-4 py-3 text-ms font-semibold border">{item.txCount}</td>
    <td className="px-4 py-3 text-xs border">${new BigNumber(item.totalValueLockedUSD).toPrecision(5)}m</td>
    <td className="px-4 py-3 text-sm border">${new BigNumber(item.volumeUSD).toPrecision(5)}m</td>
  </tr>
);

export default ListItem;
