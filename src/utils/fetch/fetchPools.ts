import useSWR from "swr";
import { gql } from "graphql-request";
import fetcher from "utils/fetch/fetcher";
import CONSTANTS from "utils/constants";

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

// Paginated fetch a pools data

const fetchPools = (skip: number): PoolsData => {
  const query = gql`
    query getPools($skip: Int) {
      factories {
        poolCount
      }
      pools(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
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

  const { data, error } = useSWR([query, skip], () => fetcher(query, { skip }));
  if (error) {
    console.error({ error });
    return error;
  }
  return data;
};

export default fetchPools;
