import useSWR from "swr";
import { request } from "graphql-request";
import CONSTANTS from "utils/constants";

const fetcher = (query, variables) => request(CONSTANTS.POOLS_URL, query, variables);

const fetchData = variables => {
  const query = `{
    query getAllPools ($skip: Int) {
      factories{
        poolCount
      },
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
  }`;
  // TODO: implement error handling
  const { data, error } = useSWR([query, variables], fetcher);
  return data;
};

export default fetchData;
