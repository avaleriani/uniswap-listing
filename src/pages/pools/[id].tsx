import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import fetchPair from "utils/fetch/fetchPair";
import { useAppContext } from "utils/context";
import Button from "components/Button";
import PairCard from "components/PairCard";
import List from "components/List";
import ListTransactionsItem from "components/ListTransactionsItem";

const Details: NextPage = () => {
  const { state, setState } = useAppContext();
  const [offset, setOffset] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const pair = fetchPair(id as string);
  console.log(pair);
  // const data = fetchTransactions(offset);

  const addToWatchList = item => {
    setState({ ...state, watchlist: [...state.watchlist, item] });
  };

  return (
    <>
      <div className="flex items-center justify-between p-8">
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/">
          {`<-- Back to pools`}
        </a>
        <Button title="Add to Watchlist" onClick={() => addToWatchList(id)} />
      </div>
      <PairCard pair={pair?.pool} />
      <List
        totalItems={pair?.txCount}
        header={["Link to Etherscan", "Tx Type", "Token Amount", "Timestamp"]}
        offset={offset}
        setOffset={setOffset}>
        {pair && pair.transactions.map(item => <ListTransactionsItem key={item.id} item={item} />)}
      </List>
    </>
  );
};

export default Details;
