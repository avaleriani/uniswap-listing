import type { NextPage } from "next";
import List from "components/List";
import fetchData from "../utils/fetcher";
import { useState } from "react";
import THead from "components/List/thead";
import TBody from "components/List/thead";

const Home: NextPage = () => {
  const [pagination, setPagination] = useState({ limit: 10, offset: 0 });
  const data = fetchData(pagination);
  console.log(data);
  return (
    <div className="font-mono bg-black h-screen">
      <h1 className="text-3xl text-white">Pool Watchlist</h1>
      <List data={data?.pools} pagination={pagination} setPagination={setPagination}>
        <>
          <THead>
            <th className="px-4 py-3">Pool</th>
            <th className="px-4 py-3">Tx Count</th>
            <th className="px-4 py-3">TVL (USD)</th>
            <th className="px-4 py-3">Volume (USD)</th>
          </THead>
          <TBody>

          </TBody>
        </>
      </List>
    </div>
  );
};

export default Home;
