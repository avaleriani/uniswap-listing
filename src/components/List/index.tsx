import type { ReactNode } from "react";
import Pagination from "components/Pagination";
import Image from "components/Image";
import { BigNumber } from "bignumber.js";
import { getTokenLogoUrl } from "utils/image";

type PaginationData = {
  limit: number;
  offset: number;
};

type ListProps = {
  children: ReactNode[];
  data: ListData;
  pagination: PaginationData;
  setPagination: any; // TODO: fix
};

type ListData = [
  item: {
    id: string;
    token0: Token;
    token1: Token;
    txCount: string;
    totalValueLockedUSD: string;
    volumeUSD: string;
  },
];

type Token = {
  name: string;
  symbol: string;
};

const List = (props: ListProps) => {
  return (
    <section className="container mx-auto p-6">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {props.children}
          </table>
        </div>
      </div>
      <Pagination offset={props.pagination.offset} />
    </section>
  );
};

export default List;

