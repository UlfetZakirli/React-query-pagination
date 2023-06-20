import React, { useState } from 'react'
import ProductsList from '../components/ProductsList'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getProductList } from '../services/api'

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { isLoading, error, isError, data, isFetching } = useQuery({
        queryKey: ['posts', currentPage],
        queryFn: () => getProductList(currentPage),
        placeholderData: keepPreviousData
    })
    console.log(data);


    if (isLoading) return 'Loading...'
    if (isError) return `Error: ${error.message}`


    return (
        <div className='max-w-4xl mx-auto'>
            <h1 className='text-center text-2xl my-5 underline font-bold'>Pagination</h1>
            <ProductsList products={data.products} />
            <div className="flex items-center justify-between my-5">
                <Pagination
                    currentPage={currentPage}
                    totalItems={data.totalData}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                {
                    isFetching ? <LoadingSpinner /> : null
                }

            </div>
        </div>
    )
}

export default Products