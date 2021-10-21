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

const Details: NextPage = () => {
  const { state, setState } = useAppContext();
  const [offset, setOffset] = useState(0);
  const [typeFilter, setTypeFilter] = useState(TypeFilter.ALL);
  const [pool, setPool] = useState(undefined);
  const router = useRouter();
  const { id } = router.query;
  const pair = fetchPair(id as string, typeFilter, offset);
  const inWatchlist = state.watchlist.findIndex(x => x.id === id) !== -1;

  const addToWatchList = item => {
    if (state.watchlist.findIndex(x => x.id === item.id) === -1) {
      setState({ ...state, watchlist: [...state.watchlist, item] });
    }
  };

  const removeFromWatchlist = item => {
    const index = state.watchlist.findIndex(x => x.id === item.id);
    if (index !== -1) {
      const newArr = state.watchlist.splice(index, 1);
      setState({ ...state, watchlist: newArr });
    }
  };

  useEffect(() => {
    pair && pair.pool && setPool(pair.pool);
  }, [pair]);

  return (
    <>
      <div className="flex items-center justify-between p-8">
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/">
          {`<-- Back to pools`}
        </a>
        <WatchlistButton item={pool} add={addToWatchList} remove={removeFromWatchlist} isPresent={inWatchlist} />
      </div>

      <h1 className="text-3xl text-white">{<TokenPair token0={pool?.token0} token1={pool?.token1} />}</h1>

      <PairCard pair={pool} />

      <div className="flex">
        <h1 className="text-3xl text-white mb-3 mr-8">Transactions</h1>
        <Dropdown
          options={[TypeFilter.ALL, TypeFilter.MINT, TypeFilter.BURN, TypeFilter.SWAP]}
          setOption={setTypeFilter}
          selected={typeFilter}
        />
      </div>
      <Table
        totalItems={pair?.pool?.txCount}
        header={["Link to Etherscan", "Tx Type", "Token Amount", "Timestamp"]}
        offset={offset}
        setOffset={setOffset}>
        {pair?.transactions?.map(item => (
          <TableTransactionsItem key={item.id} item={item} />
        ))}
      </Table>
    </>
  );
};

export default Details;
