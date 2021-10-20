import { BigNumber } from "bignumber.js";
import CONSTANTS from "utils/constants";
import type { Transaction } from "utils/fetch/fetchPair";

type ListItemProps = {
  item: Transaction;
};

const ListTransactionsItem = ({ item }: ListItemProps) => {
  const getTransactionType = () => {
    if (item.mints.length > 0) return "mint";
    if (item.swaps.length > 0) return "swap";
    if (item.burns.length > 0) return "burn";
  };

  const transactionTye = getTransactionType();

  const getAmountUsd = () => {
    return item[`${transactionTye}s`][0].amountUSD;
  };

  return (
    <tr key={item.id} className="text-white cursor-pointer hover:bg-gray-500">
      <td className="px-4 py-3 border">
        <a
          target="_blank"
          href={`${CONSTANTS.ETHERSCAN_TX_URL}/${item.id}`}>{`${CONSTANTS.ETHERSCAN_TX_URL}/${item.id}`}</a>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">{transactionTye}</td>
      <td className="px-4 py-3 text-xs border">{getAmountUsd()}</td>
      <td className="px-4 py-3 text-sm border">${new BigNumber(item.timestamp).toPrecision(5)}m</td>
    </tr>
  );
};

export default ListTransactionsItem;
