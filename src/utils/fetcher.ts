import useSWR from "swr";
import { request, gql } from "graphql-request";
import CONSTANTS from "utils/constants";

export type Pool = {
  id: string;
  token0: Token;
  token1: Token;
  txCount: string;
  totalValueLockedUSD: string;
  volumeUSD: string;
};

type Token = {
  name: string;
  symbol: string;
};

type PoolsData = {
  factories: { poolCount: number };
  pools: Pool[];
};

const fetcher = (query, offset) => {
  const variables = { offset };
  return request(CONSTANTS.POOLS_URL, query, variables);
};

const fetchData = (offset: number): PoolsData => {
  const query = gql`
    query getPools($offset: Int) {
      factories {
        poolCount
      }
      pools(first: 10, skip: $offset) {
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
  const { data, error } = useSWR([query, offset], fetcher);
  if (error) {
    console.error({ error });
    return error;
  }
  return data;
};

export default fetchData;
