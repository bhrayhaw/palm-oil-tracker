import { useState } from "react";
import ReactPaginate from "react-paginate";

const Report = ({ records }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const recordsPerPage = 10;
  const pagesVisited = pageNumber * recordsPerPage;

  const displayRecords = records
    .sort((a, b) => a.id - b.id)
    .slice(pagesVisited, pagesVisited + recordsPerPage)
    .map((record) => (
      <tr key={record.id} className="bg-white border-b hover:bg-gray-100">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {record.id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {record.date}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {record.location}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {record.yield}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {record.size}
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(records.length / recordsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Report</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Yield (tons)
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Size (acres)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">{displayRecords}</tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-center">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-container"}
          pageClassName={"pagination-page"}
          previousClassName={"pagination-previous"}
          nextClassName={"pagination-next"}
          activeClassName={"pagination-active"}
          disabledClassName={"pagination-disabled"}
          breakLabel={"..."}
          breakClassName={"pagination-break"}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          breakLinkClassName={"pagination-break"}
        />
      </div>
    </div>
  );
};

export default Report;
