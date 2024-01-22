import React from 'react';
import classnames from 'classnames';
import './Pagination.scss';
import { usePagination, DOTS } from '../../CustomHooks/usePaginatinHook';
import { Container } from 'react-bootstrap';

export default function Pagination(props) {
    const {
        onPageChange,//Its a callback function invoked with the updated page value when the page is changed.
        totalCount, //represents the total count of data available from the source.
        siblingCount = 1,//represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
        currentPage,//represents the current active page. using a 1-based index instead of a traditional 0-based index for our currentPage value.
        pageSize,//represents the maximum data that is visible in a single page.
        className//to apply classes for list items here
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <Container>
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            <li
                id="on-previous"
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className={`${currentPage === 1 ? "" : "arrow left"
                    }`} />
            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        key={`pageid-${index}`}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => {
                            onPageChange(pageNumber)
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className={`${currentPage === lastPage ? "" : "arrow right"
                    }`} />
            </li>
        </ul>
        </Container>
    );
};
