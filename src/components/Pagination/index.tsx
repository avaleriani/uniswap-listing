import Image from "next/image";
import Arrow from "assets/arrow.svg";
import CONSTANTS from "utils/constants";

type PaginationProps = {
  offset: number;
  totalItems: number;
  setPagination: (a: number) => void;
  isDisabled: boolean;
};

const Pagination = ({ offset, totalItems, setPagination, isDisabled }: PaginationProps) => {
  const itemsPerPage = CONSTANTS.ITEMS_PER_PAGE;
  const currentPage = Math.ceil(offset / itemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setOffset = (newOffset: number) => {
    if (newOffset >= totalItems - itemsPerPage) {
      setPagination(totalItems - itemsPerPage);
    } else if (newOffset <= 0) {
      setPagination(0);
    } else {
      setPagination(newOffset);
    }
  };

  return (
    <div className="flex w-full items-center justify-center items-center relative mt-8">
      <button
        disabled={isDisabled}
        className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-16 flex items-center hover:border-blue-400"
        onClick={() => setOffset(offset - itemsPerPage)}>
        <Image src={Arrow} width="30px" height="30px" className="h-5 w-5 mr-2" />
      </button>
      <span className="text-white">
        Page {currentPage + 1} of {totalPages ? totalPages : "-"}
      </span>
      <button
        disabled={isDisabled}
        className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 ml-16 flex items-center hover:border-blue-400"
        onClick={() => setOffset(offset + itemsPerPage)}>
        <Image src={Arrow} width="30px" height="30px" className="h-5 w-5 mr-2 transform rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
