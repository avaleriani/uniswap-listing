import useSWR from "swr";
import fetcher from "utils/fetch/fetcher";
import { queryAll, queryBurns, queryMints, querySwaps } from "../filteredQueries";

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

const fetchPair = (id: string, type: TypeFilter, skip: number) => {
  const getQuery = () => {
    if (type === TypeFilter.BURN) return queryBurns;
    if (type === TypeFilter.MINT) return queryMints;
    if (type === TypeFilter.SWAP) return querySwaps;
    if (type === TypeFilter.ALL) return queryAll;
  };

  const filterQuery = getQuery();

  const { data, error } = useSWR([filterQuery, id, skip, type], () => fetcher(filterQuery, { id, skip }));
  if (error) {
    console.error({ error });
    return error;
  }

  let result = { ...data };
  const prop = `${type}s`;
  if (data && type !== TypeFilter.ALL && data[prop]) {
    result.transactions = data[prop].map(i => i.transaction);
    delete result[prop];
  }

  return result;
};

export default fetchPair;
