import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import { Spinner } from 'react-bootstrap';
import './Pagination.scss'
import CardPage from '../Index';
import useFetch from '../../CustomHooks/useFetch';

let PageSize = 9;

export default function Page(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading } = useFetch();

    //caching the current page list
    const currentCardData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, props.data]);

    return (
        <>
            {isLoading ?
                <><CardPage data={currentCardData} />
                    <Pagination
                        className="pagination-bar align-bottom"
                        currentPage={currentPage}
                        totalCount={props.data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /></> : <Spinner className='center-spinner' animation="grow" />}

        </>
    );
}