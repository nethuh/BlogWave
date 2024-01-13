const Pagination = ({ totalPages, onPageChange }) => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const range = (start, end) =>
        Array.from({ length: end - start + 1}, (_, i) => start + i);

    const showEllipses = totalPages > 8;
    return(
        <div className='pagination'>
            <button
                className='pagination-btn'
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}>
                Prev
            </button>

            {showEllipses && currentPage > 4 &&(
                <>
                <button className='pagination-btn' onClick={() => onPageChange(1)}>
                    1
                </button>
                    <span className='pagination-ellipsis'>...</span>
                </>
            )}
        </div>
    );
};

export default Pagination;
