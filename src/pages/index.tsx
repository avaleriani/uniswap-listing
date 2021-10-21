import type { NextPage } from "next";
import List from "components/List";
import { useState } from "react";
import ListPoolsItem from "components/ListPoolsItem";
import fetchPools from "utils/fetch/fetchPools";
import { useRouter } from "next/router";
import { useAppContext } from "utils/context";

const Home: NextPage = () => {
  const router = useRouter();
  const { state } = useAppContext();
  const [offset, setOffset] = useState(0);
  const data = fetchPools(offset);

  const onItemClick = (id, router) => {
    router.push(`/pools/${id}`);
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-white mb-3">Pool Watchlist</h1>
        <List
          totalItems={state.watchlist?.length}
          header={["Pool", "Tx Count", "TVL (USD)", "Volume (USD)"]}
          offset={offset}
          setOffset={setOffset}>
          {data &&
            state.watchlist?.map(item => (
              <ListPoolsItem key={item.id} item={item} onClick={() => onItemClick(item.id, router)} />
            ))}
        </List>
      </div>
      <div>
        <h1 className="text-3xl text-white mb-3">All Pools</h1>
        <List
          totalItems={data?.factories[0]?.poolCount}
          header={["Pool", "Tx Count", "TVL (USD)", "Volume (USD)"]}
          offset={offset}
          setOffset={setOffset}>
          {data &&
            data.pools.map(item => (
              <ListPoolsItem key={item.id} item={item} onClick={() => onItemClick(item.id, router)} />
            ))}
        </List>
      </div>
    </div>
  );
};

export default Home;
