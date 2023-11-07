import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from "./Card";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
    return (
        <ul className={"grid mx-10 text-sm gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white relative h-full"}>

        {currentItems &&
                currentItems.map((item,i) => (

                    <Card key={i} country={item} i={i}/>


                ))}
        </ul>
    );
}

function PaginatedItems({ itemsPerPage,items,page,setPage,itemOffset,setItemOffset }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(1);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,items,pageCount]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setPage(event.selected)
        setItemOffset(newOffset);
    };


    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                forcePage={page}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={"pagination dark:text-white"}
            />

            <Items currentItems={currentItems} />

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                forcePage={page}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={"pagination dark:text-white"}
            />
        </>
    );
}

export default PaginatedItems;