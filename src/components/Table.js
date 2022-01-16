import React from "react";
import { Link } from "react-router-dom";
const Table = ({ titleHeaders, datas }) => {
    const keyDatas = Object.keys(datas[0]);
    const valuesTitleHeaders = Object.values(titleHeaders[0]);

    const handleClickWatchAdd = (key) => {
        let element = document.getElementsByClassName("colum-service-nowatch")[
            key
        ];
        element.classList.toggle("colum-service");
        // element.children[1].classList.toggle("active");
    };

    return (
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
                    {datas.map((data, key) => (
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
                                    <span className="table-Link">Chi tiết</span>
                                </Link>
                            </th>
                            <th>
                                <Link to={`/equipment/update?id=${key}`}>
                                    <span className="table-Link">Cập nhật</span>
                                </Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
