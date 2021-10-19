import Image from "next/image";
import Arrow from "public/assets/arrow.svg";
import CONSTANTS from "utils/constants";

type PaginationProps = {
  offset: number;
  totalItems: number;
  setPagination: (a: number) => void;
};

const Pagination = ({ offset, totalItems, setPagination }: PaginationProps) => {
  const itemsPerPage = CONSTANTS.ITEMS_PER_PAGE;
  const currentPage = offset / itemsPerPage;
  const setOffset = (newOffset: number) => {
    if (newOffset >= totalItems) {
      setPagination(totalItems - offset);
    } else if (newOffset >= 0) {
      setPagination(0);
    } else {
      setPagination(newOffset);
    }
  };
  return (
    <div className="flex w-full items-center">
      <button
        className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-red"
        onClick={() => setOffset(offset + itemsPerPage)}>
        <Image src={Arrow} width="100px" height="40px" className="h-5 w-5 mr-2" />
      </button>
      <span>
        Page {currentPage} of {Math.round(totalItems / itemsPerPage)}
      </span>
      <button
        className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-red"
        onClick={() => setOffset(offset + itemsPerPage)}>
        <Image src={Arrow} width="100px" height="40px" className="h-5 w-5 mr-2 transform rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
