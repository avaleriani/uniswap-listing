import type { NextPage } from "next";
import List from "components/List";
import fetchData, { Pool } from "utils/fetcher";
import { useState } from "react";
import ListItem from "components/ListItem";

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0);
  const data = fetchData(offset);
  console.log(offset, data)
  return (
    <div className="font-mono bg-black h-screen p-4">
      <h1 className="text-3xl text-white">Pool Watchlist</h1>
      <List
        totalItems={data?.factories[0]?.poolCount}
        header={["Pool", "Tx Count", "TVL (USD)", "Volume (USD)"]}
        offset={offset}
        setOffset={setOffset}>
        {data && data.pools.map((item: Pool) => <ListItem key={item.id} item={item} />)}
      </List>
    </div>
  );
};

export default Home;
