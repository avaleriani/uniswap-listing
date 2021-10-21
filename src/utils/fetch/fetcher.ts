import { request } from "graphql-request";
import CONSTANTS from "utils/constants";

const fetcher = async (query, variables) => await request(CONSTANTS.POOLS_URL, query, variables);

export default fetcher;
