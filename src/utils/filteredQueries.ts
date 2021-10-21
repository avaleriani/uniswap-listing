import { gql } from "graphql-request";
import CONSTANTS from "utils/constants";

// Queries used for fetching transactions by type and all together.¬
// TODO: Probably there is a much cleaner way to achieve this but I've already spent too much time on this :)

export const queryAll = gql`
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
        }
        transactions(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip, where: $type) {
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

export const queryMints = gql`
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
        mints(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
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
    }
`;

export const queryBurns = gql`
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
        burns(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
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
    }
`;

export const querySwaps = gql`
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
        swaps(first: ${CONSTANTS.ITEMS_PER_PAGE}, skip: $skip) {
            id
            transaction {
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
    }
`;
