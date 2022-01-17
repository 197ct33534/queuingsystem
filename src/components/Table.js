import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Table = ({ titleHeaders, datas }) => {
    const keyDatas = Object.keys(datas[0]);
    const valuesTitleHeaders = Object.values(titleHeaders[0]);
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(9);

    const handleClickWatchAdd = (key) => {
        let element = document.getElementsByClassName("colum-service-nowatch")[
            key
        ];
        element.classList.toggle("colum-service");
    };
    // get current row
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = datas.slice(indexOfFirstRow, indexOfLastRow);
    const handleClickPagination = (num) => {
        setCurrentPerPage(num);
    };
    const handleClickNextPagine = () => {
        if (currentPerPage === Math.ceil(datas.length / numRowInPage))
            setCurrentPerPage(1);
        else setCurrentPerPage((prev) => prev + 1);
    };
    const handleClickPrevPagine = () => {
        if (currentPerPage === 1)
            setCurrentPerPage(Math.ceil(datas.length / numRowInPage));
        else setCurrentPerPage((prev) => prev - 1);
    };
    return (
        <>
            <div className="table ">
                <table>
                    <thead>
                        <tr>
                            {valuesTitleHeaders.map((item, key) => (
                                <th key={key}>{item}</th>
                            ))}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((data, key) => (
                            <tr key={data.id}>
                                {keyDatas.map((keyData, index) => (
                                    <th
                                        key={`${data.id}- ${keyData}`}
                                        className={
                                            keyData === "service"
                                                ? "colum-service colum-service-nowatch"
                                                : ""
                                        }
                                    >
                                        {typeof data[keyData] === "boolean" &&
                                            (data[keyData] ? (
                                                <span className="active">
                                                    {keyData === "active"
                                                        ? "Hoạt động"
                                                        : "Kết nối"}
                                                </span>
                                            ) : (
                                                <span className="danger">
                                                    {keyData === "active"
                                                        ? "Ngưng hoạt động"
                                                        : "Mất kết nối"}
                                                </span>
                                            ))}
                                        {<p>{data[keyData]}</p>}
                                        {keyData === "service" && (
                                            <>
                                                {/* <div className="service_hidden">
                                                {data[keyData]}
                                            </div> */}

                                                <p
                                                    className="table-Link table-Link_watch"
                                                    onClick={() =>
                                                        handleClickWatchAdd(key)
                                                    }
                                                >
                                                    xem thêm
                                                </p>
                                            </>
                                        )}
                                    </th>
                                ))}
                                <th>
                                    <Link to={`/equipment/detail?id=${key}`}>
                                        <span className="table-Link">
                                            Chi tiết
                                        </span>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={`/equipment/update?id=${key}`}>
                                        <span className="table-Link">
                                            Cập nhật
                                        </span>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                totalDatas={datas.length}
                numRowInPage={numRowInPage}
                handleClickPagination={handleClickPagination}
                currentPerPage={currentPerPage}
                handleClickNextPagine={handleClickNextPagine}
                handleClickPrevPagine={handleClickPrevPagine}
            />
        </>
    );
};

export default Table;
