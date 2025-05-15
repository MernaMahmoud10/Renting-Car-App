import React, { Dispatch, SetStateAction } from 'react'
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    page: number
    pageCount: number
    setPage: Dispatch<SetStateAction<number>>
}
const PaginationComponent = (props: PaginationProps) => {
    return (
        <ReactPaginate
            pageCount={props?.pageCount}
            previousLabel={"previous"}
            nextLabel={"next"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(data) => props?.setPage(data?.selected + 1)}
            containerClassName='pagination justify-content-center pagesNav my-4'
            pageClassName='page-item'
            previousClassName='page-item'
            nextClassName='page-item'
            pageLinkClassName='page-link'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link '
            activeClassName='active'
            initialPage={props?.page - 1}

        />
    )
}

export default PaginationComponent