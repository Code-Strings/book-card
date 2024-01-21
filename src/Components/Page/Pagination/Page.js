import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import { Spinner } from 'react-bootstrap';
import './Pagination.scss'
import CardPage from '../Index';
import useFetch from '../../CustomHooks/useFetch';

let PageSize = 9;

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useFetch();
    
    console.log("Check here Page data:", data, isLoading);

    const currentCardData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    console.log("check here Page:", currentCardData)
    return (
        <>
            {isLoading ?
                <><CardPage data={currentCardData} />
                    <Pagination
                        className="pagination-bar align-bottom"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /></> : <Spinner className='center-spinner' animation="grow" />}

        </>
    );
}