import { gql } from "graphql-request";
import useSWR from "swr";
import fetcher from "utils/fetch/fetcher";
import CONSTANTS from "utils/constants";

type TransactionType = {
  amountUSD: number;
};

export type Transaction = {
  id: string;
  blocknumber: string;
  timestamp: string;
  mints: TransactionType[];
  burns: TransactionType[];
  swaps: TransactionType[];
};

// Fetch a pair data with transactions

const fetchPair = (id: string, skip: number) => {
  const query = gql`
    query ($id: String, $skip: Int) {
      pool(id: $id) {
        id
        token0 {
          id
          symbol
          name
          totalValueLockedUSD
          txCount
        }
        token1 {
          id
          symbol
          name
          totalValueLockedUSD
          txCount 
        }
        txCount
      }
      transactions(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
        id
        blockNumber
        timestamp
        mints {
          amountUSD
        }
        burns {
          amountUSD
        }
        swaps {
          amountUSD
        }
      }
    }
  `;

  const { data, error } = useSWR([query, id, skip], () => fetcher(query, { id, skip }));
  if (error) {
    console.error({ error });
    return error;
  }

  return data;
};

export default fetchPair;
