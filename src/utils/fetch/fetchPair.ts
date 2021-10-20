import { gql } from "graphql-request";
import useSWR from "swr";
import fetcher from "utils/fetch/fetcher";

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

const fetchPair = (id: string) => {
  const query = gql`
    query ($id: String) {
      pool(id: $id) {
        id
        token0 {
          id
          symbol
          name
          totalValueLocked
        }
        token1 {
          id
          symbol
          name
          totalValueLocked
        }
        txCount
      }
      transactions(first: 5) {
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

  const { data, error } = useSWR([query, "id", id], fetcher);
  if (error) {
    console.error({ error });
    return error;
  }
  console.log({ data });
  return data;
};

export default fetchPair;
