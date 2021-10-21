import TokenPair from "components/TokenPair";
import { Pool } from "utils/fetch/fetchPools";
import { abbNumber } from "utils/money";

type TableItemProps = {
  item: Pool;
  onClick: () => void;
};

// Table items for Pools listing and watchlist
// TODO: add "remove from watchlist" button.
// TODO: Add "add to watchlist" button.

const TablePoolsItem = ({ item, onClick }: TableItemProps) => (
  <tr key={item.id} className="text-white cursor-pointer hover:bg-gray-500" onClick={onClick}>
    <td className="px-4 py-3 border">
      <TokenPair token0={item.token0} token1={item.token1} />
    </td>
    <td className="px-4 py-3 text-ms font-semibold border">{item.txCount}</td>
    <td className="px-4 py-3 text-xs border">${abbNumber(item.totalValueLockedUSD)}</td>
    <td className="px-4 py-3 text-sm border">{abbNumber(item.volumeUSD)}</td>
  </tr>
);

export default TablePoolsItem;
