import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPagination = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 4) pages.push("prev-ellipsis");

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 3) pages.push("next-ellipsis");

    pages.push(totalPages);

    return pages;
  };

  const pagination = getPagination();

  return (
    <div className="flex justify-end items-center gap-1 mt-4 flex-wrap">
      {pagination.map((item, idx) => {
        if (item === "prev-ellipsis") {
          return (
            <button
              key={idx}
              onClick={() => onPageChange(Math.max(currentPage - 10, 1))}
              className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
              ...
            </button>
          );
        }

        if (item === "next-ellipsis") {
          return (
            <button
              key={idx}
              onClick={() =>
                onPageChange(Math.min(currentPage + 10, totalPages))
              }
              className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
              ...
            </button>
          );
        }

        return (
          <button
            key={idx}
            onClick={() => onPageChange(item as number)}
            className={`px-3 py-1 border rounded-lg ${
              currentPage === item
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
