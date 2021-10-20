import type { NextPage } from "next";
import List from "components/List";
import { useState } from "react";
import ListPoolsItem from "components/ListPoolsItem";
import fetchPools from "utils/fetch/fetchPools";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  const data = fetchPools(offset);

  const onItemClick = (id, router) => {
    router.push(`/pools/${id}`);
  };

  return (
    <>
      <h1 className="text-3xl text-white">Pool Watchlist</h1>
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
    </>
  );
};

export default Home;
