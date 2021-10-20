import useSWR from "swr";
import { gql } from "graphql-request";
import fetcher from "utils/fetch/fetcher";

export type Pool = {
  id: string;
  token0: Token;
  token1: Token;
  txCount: string;
  totalValueLockedUSD: string;
  volumeUSD: string;
};

export type Token = {
  name: string;
  symbol: string;
};

type PoolsData = {
  factories: { poolCount: number };
  pools: Pool[];
};

const fetchPools = (offset: number): PoolsData => {
  const query = gql`
    query getPools($skip: Int) {
      factories {
        poolCount
      }
      pools(first: 10, skip: $skip) {
        id
        token0 {
          id
          symbol
          name
        }
        token1 {
          id
          symbol
          name
        }
        txCount
        totalValueLockedUSD
        volumeUSD
      }
    }
  `;
  const { data, error } = useSWR([query, "skip", offset], fetcher);
  if (error) {
    console.error({ error });
    return error;
  }
  return data;
};

export default fetchPools;
