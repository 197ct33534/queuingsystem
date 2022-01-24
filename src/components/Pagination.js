import React from "react";

const Pagination = ({
    totalDatas, //độ dài của mảng dữ liệu : number
    numRowInPage, //số dòng hiển thị trong bảng : number
    currentPerPage, //số trang hiện tại  trong bảng : number
    setCurrentPerPage, // hàm dùng để set lại current per page : function
    maxPageNumberLimit, //số currentPerPage tối đa cần hiển thị : number
    setmaxPageNumberLimit, // hàm dùng để set lại số currentPerPage tối đa : function
    minPageNumberLimit, //số currentPerPage tối thiệu cần hiển thị : number
    setminPageNumberLimit, // hàm dùng để set lại số currentPerPage tối thiểu : function
    pageNumberLimit, // SỐ NUMBER giới hạn
}) => {
    let numPages = [];
    for (let i = 1; i <= Math.ceil(totalDatas / numRowInPage); i++) {
        numPages.push(i);
    }
    const handleClickNextPagine = () => {
        if (currentPerPage + 1 > Math.ceil(totalDatas / numRowInPage)) {
            return;
        }
        setCurrentPerPage((prev) => prev + 1);
        if (currentPerPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handleClickPrevPagine = () => {
        if (currentPerPage - 1 === 0) {
            return;
        }
        setCurrentPerPage(currentPerPage - 1);

        if ((currentPerPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    const handleClickPagination = (num) => {
        setCurrentPerPage(num);
    };

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
