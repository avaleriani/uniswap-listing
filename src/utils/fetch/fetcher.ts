import { request } from "graphql-request";
import CONSTANTS from "utils/constants";

const fetcher = async (query, key, value) => {
  const variables = { [key]: value };
  console.log(key, variables);
  return await request(CONSTANTS.POOLS_URL, query, variables);
};

export default fetcher;
