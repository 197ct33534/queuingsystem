import React from "react";

const Pagination = ({
    totalDatas,
    numRowInPage,
    handleClickPagination,
    currentPerPage,
    handleClickNextPagine,
    handleClickPrevPagine,
}) => {
    let numPages = [];
    for (let i = 1; i <= Math.ceil(totalDatas / numRowInPage); i++) {
        numPages.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination-warp">
                <li onClick={() => handleClickPrevPagine()}>
                    <i className="bx bx-caret-left pagination-icon"></i>
                </li>
                {numPages.map((num, key) => (
                    <li
                        key={key}
                        onClick={() => handleClickPagination(num)}
                        className={`${currentPerPage === num ? "active" : ""}`}
                    >
                        {num}
                    </li>
                ))}

                <li onClick={() => handleClickNextPagine()}>
                    <i className="bx bx-caret-right pagination-icon"></i>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
