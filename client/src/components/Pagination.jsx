const Pagination = ({ totalPages, onPageChange }) => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const range = (start, end) =>
        Array.from({ length: end - start + 1}, (_, i) => start + i);

    const showEllipses = totalPages > 8;
    return(
        <div>

        </div>
    );
};

export default Pagination;
