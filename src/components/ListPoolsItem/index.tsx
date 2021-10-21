import TokenPair from "components/TokenPair";
import { Pool } from "utils/fetch/fetchPools";
import { abbNumber } from "utils/money";
import BigNumber from "bignumber.js";

type ListItemProps = {
  item: Pool;
  onClick: () => void;
};

// List items for Pools listing and watchlist
// TODO: add remove from watchlist button

const ListPoolsItem = ({ item, onClick }: ListItemProps) => (
  <tr key={item.id} className="text-white cursor-pointer hover:bg-gray-500" onClick={onClick}>
    <td className="px-4 py-3 border">
      <TokenPair token0={item.token0} token1={item.token1} />
    </td>
    <td className="px-4 py-3 text-ms font-semibold border">{item.txCount}</td>
    <td className="px-4 py-3 text-xs border">${abbNumber(new BigNumber(item.totalValueLockedUSD).toNumber())}</td>
    <td className="px-4 py-3 text-sm border">{abbNumber(new BigNumber(item.volumeUSD).toNumber())}</td>
  </tr>
);

export default ListPoolsItem;
