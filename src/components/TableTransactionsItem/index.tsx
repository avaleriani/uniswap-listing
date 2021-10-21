import CONSTANTS from "utils/constants";
import type { Transaction } from "utils/fetch/fetchPair";
import { timeSince } from "utils/time";
import { abbNumber } from "utils/money";
import { TypeFilter } from "utils/fetch/fetchPair";

type ListItemProps = {
  item: Transaction;
};

// Table transactions rows

const TableTransactionsItem = ({ item }: ListItemProps) => {
  const getTransactionType = () => {
    if (item.mints.length > 0) return TypeFilter.MINT;
    if (item.swaps.length > 0) return TypeFilter.SWAP;
    if (item.burns.length > 0) return TypeFilter.BURN;
  };

  const transactionTye = getTransactionType();

  const getAmountUsd = () => {
    return abbNumber(item[`${transactionTye}s`][0].amountUSD);
  };

  return (
    <tr key={item.id} className="h-8 text-white cursor-pointer hover:bg-gray-500">
      <td className="px-4 py-3 border">
        <a
          target="_blank"
          href={`${CONSTANTS.ETHERSCAN_TX_URL}/${item.id}`}>{`${CONSTANTS.ETHERSCAN_TX_URL}/${item.id}`}</a>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">{transactionTye}</td>
      <td className="px-4 py-3 text-xs border">{getAmountUsd()} USDC</td>
      <td className="px-4 py-3 text-sm border">{timeSince(item.timestamp)}</td>
    </tr>
  );
};

export default TableTransactionsItem;
