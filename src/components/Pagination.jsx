import React from 'react'
import { ITEM_PER_PAGE } from '../utils/constants'

const Pagination = ({ currentPage, totalItems, onPageChange }) => {

    const handlePrevClick = () => onPageChange(currentPage - 1)
    const handleNextClick = () => onPageChange(currentPage + 1)

    const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE)

    return (
        <div className="join">
            <button disabled={currentPage === 1} onClick={handlePrevClick} className="join-item btn btn-neutral">«</button>
            <button className="join-item btn btn-neutral">Page {currentPage}</button>
            <button disabled={currentPage === pageCount} onClick={handleNextClick} className="join-item btn btn-neutral">»</button>
        </div>
    )
}

export default Pagination