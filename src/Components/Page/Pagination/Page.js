import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import useFetch from './useFetch';
import { Container, Row, Spinner } from 'react-bootstrap';
import './Pagination.css'
import Card from '../../Card/Index';

let PageSize = 10;
const url = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useFetch(url);
    console.log("Check here Page data:", data, isLoading);

    const currentCardData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    const [isFlipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    console.log("check here Page:", currentCardData)
    return (
        <>
            {isLoading ? 
            <Container fluid>
                <Row>
                    <Card isFlipped={isFlipped} handleFlip={handleFlip}/>
                </Row>
            </Container> : <Spinner className='center-spinner' animation="grow" />}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}