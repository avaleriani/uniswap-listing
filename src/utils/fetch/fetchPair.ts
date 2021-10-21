import useSWR from "swr";
import fetcher from "utils/fetch/fetcher";
import { gql } from "graphql-request";
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

export enum TypeFilter {
  ALL = "all",
  SWAP = "swap",
  MINT = "mint",
  BURN = "burn",
}

// Paginated fetch a pair data with transactions

const fetchPair = (id: string, skip: number) => {
  const { data, error } = useSWR([query, id, skip], () => fetcher(query, { id, skip }));
  if (error) {
    console.error({ error });
    return error;
  }

  return data;
};

// Queries used for fetching transactions by type and all together.
// TODO: Probably there is a much cleaner way to achieve this but I've already spent too much time on this :)
const query = gql`
    query ($id: String, $skip: Int, $type: String) {
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
            totalValueLockedUSD
            volumeUSD
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
        swaps(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
                id
                blockNumber
                timestamp
                mints (first: 1){
                    amountUSD
                }
                burns (first: 1){
                    amountUSD
                }
                swaps (first: 1){
                    amountUSD
                }
            }
        }
        mints(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
                id
                blockNumber
                timestamp
                mints (first: 1){
                    amountUSD
                }
                burns (first: 1){
                    amountUSD
                }
                swaps (first: 1){
                    amountUSD
                }
            }
        }
        burns(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
                id
                blockNumber
                timestamp
                mints (first: 1){
                    amountUSD
                }
                burns (first: 1){
                    amountUSD
                }
                swaps (first: 1){
                    amountUSD
                }
            }
        }
    }
`;

export default fetchPair;