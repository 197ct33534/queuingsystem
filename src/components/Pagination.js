import React from "react";

const Pagination = ({
    totalDatas,
    numRowInPage,
    handleClickPagination,
    currentPerPage,
    handleClickNextPagine,
    handleClickPrevPagine,
    maxPageNumberLimit,
    minPageNumberLimit,
}) => {
    let numPages = [];
    for (let i = 1; i <= Math.ceil(totalDatas / numRowInPage); i++) {
        numPages.push(i);
    }

    let pageIncrementBtn = null;
    if (numPages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleClickNextPagine}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handleClickPrevPagine}> &hellip; </li>;
    }
    return (
        <div className="pagination">
            <ul className="pagination-warp">
                <li onClick={() => handleClickPrevPagine()}>
                    <i className="bx bx-caret-left pagination-icon"></i>
                </li>
                {pageDecrementBtn}
                {numPages.map((num, key) =>
                    num < maxPageNumberLimit + 1 && num > minPageNumberLimit ? (
                        <li
                            key={key}
                            onClick={() => handleClickPagination(num)}
                            className={`${
                                currentPerPage === num ? "active" : ""
                            }`}
                        >
                            {num}
                        </li>
                    ) : (
                        ""
                    )
                )}
                {pageIncrementBtn}
                <li onClick={() => handleClickNextPagine()}>
                    <i className="bx bx-caret-right pagination-icon"></i>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
