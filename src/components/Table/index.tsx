import type { ReactNode } from "react";
import Pagination from "components/Pagination";

type TableProps = {
  children: ReactNode[] | ReactNode;
  header: string[];
  totalItems: number;
  offset: number;
  setOffset: (n: number) => void;
};

// Table wrapper with flexible head and custom rows

const Table = ({ children, header, offset, setOffset, totalItems }: TableProps) => {
  return (
    <section className="mx-auto ">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto md:overflow-hidden">
          <table className="w-full p-2">
            <thead>
              <tr className="text-md font-semibold text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                {header &&
                  header.map((item, i) => (
                    <th key={`thead-${i}`} className="px-4 py-3">
                      {item}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="min-h-full h-96">
              {!children ? (
                <tr>
                  <td colSpan={header.length}>
                    <div className="flex justify-center items-center p-4">
                      <div className="animate-spin rounded-full h-16 w-16 border-b border-white-900" />
                    </div>
                  </td>
                </tr>
              ) : (
                children
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalItems && totalItems > 10 ? (
        <Pagination offset={offset} setPagination={setOffset} totalItems={totalItems} />
      ) : null}
    </section>
  );
};

export default Table;
