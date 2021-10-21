import { request } from "graphql-request";
import CONSTANTS from "utils/constants";

// Utility function for fetching from graphql endpoint

const fetcher = async (query, variables) => await request(CONSTANTS.POOLS_URL, query, variables);

export default fetcher;
