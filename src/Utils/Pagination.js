import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPress }) => {
    const handlePageClick = (data) => {onPress(data.selected + 1)};

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={
                'pagination container flex items-center gap-1 justify-center rounded-lg border-2 w-fit sm:flex-row sm:w-fit py-4'
            }
            pageClassName={''}
            pageLinkClassName={
                'border border-base py-1 px-2 sm:py-2 sm:px-3 sm:text-sm text-xs  rounded-md hover:amber-600 hover:text-amber-400'
            }
            previousClassName={''}
            nextClassName={''}
            previousLinkClassName={
                'border border-base py-1 px-2  sm:py-2 sm:px-3 sm:text-sm rounded-md hover:amber-600 hover:text-amber-400'
            }
            nextLinkClassName={
                'border border-base py-1 px-2 sm:py-2 sm:px-3 sm:text-sm rounded-md hover:amber-600 hover:text-amber-400'
            }
            breakClassName={''}
            breakLinkClassName={''}
            activeClassName={''}
        />
    );
};

export default Pagination;
