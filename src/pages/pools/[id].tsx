import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchPair, { TypeFilter } from "utils/fetch/fetchPair";
import { useAppContext } from "utils/context";
import PairCard from "components/PairCard";
import Table from "components/Table";
import TableTransactionsItem from "components/TableTransactionsItem";
import TokenPair from "components/TokenPair";
import WatchlistButton from "components/WatchlistButton";
import Dropdown from "components/Dropdown";
import CONSTANTS from "utils/constants";

// TODO: better variable names
const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { state, setState } = useAppContext();
  const [offset, setOffset] = useState(0);
  const [typeFilter, setTypeFilter] = useState(TypeFilter.ALL);
  const pair = fetchPair(id as string);
  const [pairData, setPairData] = useState(pair);
  const inWatchlist = state.watchlist.findIndex(x => x.id === id) !== -1;

  const addToWatchList = item => {
    if (state.watchlist.findIndex(x => x.id === item.id) === -1) {
      setState({ ...state, watchlist: [...state.watchlist, item] });
    }
  };

  const removeFromWatchlist = item => {
    const index = state.watchlist.findIndex(x => x.id === item.id);
    if (index !== -1) {
      const newArr = [...state.watchlist];
      newArr.splice(index, 1);
      setState({ ...state, watchlist: newArr });
    }
  };

  const setOption = (type: TypeFilter) => {
    setOffset(0);
    setTypeFilter(type);
  };

  useEffect(() => {
    if (pair) {
      if (typeFilter !== TypeFilter.ALL) {
        const newTransactions = pair[`${typeFilter}s`].map(i => i.transaction);
        setPairData(newTransactions);
      } else {
        setPairData([
          ...pair.mints.map(i => i.transaction),
          ...pair.burns.map(i => i.transaction),
          ...pair.swaps.map(i => i.transaction),
        ]);
      }
    } else {
      setPairData(undefined);
    }
  }, [typeFilter, pair]);

  return (
    <>
      <div className="flex items-center justify-between p-8">
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/">
          {`<-- Back to pools`}
        </a>
        <WatchlistButton
          disabled={!pair?.pool}
          item={pair?.pool}
          add={addToWatchList}
          remove={removeFromWatchlist}
          isPresent={inWatchlist}
        />
      </div>

      <h1 className="text-3xl text-white">{<TokenPair token0={pair?.pool?.token0} token1={pair?.pool?.token1} />}</h1>

      <PairCard pair={pair?.pool} />

      <div className="flex">
        <h1 className="text-3xl text-white mb-3 mr-8">Transactions</h1>
        <Dropdown
          options={[TypeFilter.ALL, TypeFilter.MINT, TypeFilter.BURN, TypeFilter.SWAP]}
          setOption={setOption}
          selected={typeFilter}
        />
      </div>

      <Table
        key={`${typeFilter}-table`}
        totalItems={pairData?.length}
        header={["Link to Etherscan", "Tx Type", "Token Amount", "Timestamp"]}
        offset={offset}
        setOffset={setOffset}>
        {pairData &&
          pairData.length > 0 &&
          pairData
            .slice(offset, offset + CONSTANTS.ITEMS_PER_PAGE)
            .map((item, i) => <TableTransactionsItem key={`${item.id}-${typeFilter}-${i}`} item={item} />)}
      </Table>
    </>
  );
};

export default Details;
