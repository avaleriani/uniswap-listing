import { BigNumber } from "bignumber.js";
import TokenPair from "components/TokenPair";
import { Pool } from "utils/fetch/fetchPools";

type ListItemProps = {
  item: Pool;
  onClick: () => void;
};

const ListPoolsItem = ({ item, onClick }: ListItemProps) => {
  return (
    <tr key={item.id} className="text-white cursor-pointer hover:bg-gray-500" onClick={onClick}>
      <td className="px-4 py-3 border">
        <TokenPair token0={item.token0} token1={item.token1} />
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">{item.txCount}</td>
      <td className="px-4 py-3 text-xs border">${new BigNumber(item.totalValueLockedUSD).toPrecision(5)}m</td>
      <td className="px-4 py-3 text-sm border">${new BigNumber(item.volumeUSD).toPrecision(5)}m</td>
    </tr>
  );
};

export default ListPoolsItem;
