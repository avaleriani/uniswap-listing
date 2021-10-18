import useSWR from "swr";
import { request } from "graphql-request";
import CONSTANTS from "utils/constants";

const fetcher = query => request(CONSTANTS.POOLS_URL, query);

const fetchData = ({ data, error }) =>
  useSWR(
    `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
    fetcher,
  );

export default fetchData;
