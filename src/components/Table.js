import React from "react";
import { Link } from "react-router-dom";

import FilterTable from "./FilterTable";
const Table = ({
    datas, // mãng chứa các object:[{}]
    IsDetail, // mãng có cột chi tiết hay không : true or false
    pathDetail, //nếu có chi tiết thì đường dẫn để xem chi tiết: string
    IsUpdate, // mãng có cột update hay không : true or false
    pathUpdate, //nếu có update thì đường dẫn để xem update: string
    tittleHeaders, // mãng chứa các tiêu đề : string[]
    keyDatas, // mãng chứa các key object datas:string[]
    filter, // lọc ở đầu cột
    onClickFilter,
    state,
    setState,
    dataOrigin,
}) => {
    const handleClickWatchAdd = (key) => {
        let element = document.getElementsByClassName("colum-service-nowatch")[
            key
        ];
        element.classList.toggle("colum-service");
    };
    const handleOnMouseLeave = (key) => {
        setState((prev) => ({ ...prev, [key]: false }));
    };
    return (
        <div className="table ">
            <table>
                <thead>
                    <tr>
                        {tittleHeaders.map((tittle, index) => (
                            <th key={index}>
                                {tittle}
                                {filter && (
                                    <p
                                        name={keyDatas[index]}
                                        className="table-filter"
                                        onClick={(e) =>
                                            onClickFilter(keyDatas[index])
                                        }
                                    >
                                        <i className="bx bxs-up-arrow"></i>
                                        <i className="bx bxs-down-arrow"></i>
                                    </p>
                                )}
                                {filter && state[keyDatas[index]] && (
                                    <FilterTable
                                        data={[
                                            "Tất cả",
                                            ...dataOrigin.map(
                                                (item) => item[keyDatas[index]]
                                            ),
                                        ]}
                                        state={state}
                                        setState={setState}
                                        keydata={keyDatas[index]}
                                        handleOnMouseLeave={handleOnMouseLeave}
                                    />
                                )}
                            </th>
                        ))}
                        {IsDetail && <th></th>}
                        {IsUpdate && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, key) => (
                        <tr key={data.id}>
                            {keyDatas.map((keyData, index) => {
                                return (
                                    <th
                                        key={index}
                                        className={
                                            keyData === "service"
                                                ? "colum-service colum-service-nowatch"
                                                : ""
                                        }
                                    >
                                        {(keyData === "active") &
                                        (data[keyData] === true) ? (
                                            <span className="active">
                                                {"Hoạt động"}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {(keyData === "active") &
                                        (data[keyData] === false) ? (
                                            <span className="danger">
                                                {"Ngưng hoạt động"}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {(keyData === "connect") &
                                        (data[keyData] === false) ? (
                                            <span className="danger">
                                                {"Mất kết nối"}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {(keyData === "connect") &
                                        (data[keyData] === true) ? (
                                            <span className="active">
                                                {"Kết nối"}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {
                                            /* status of data service*/
                                            (keyData === "status") &
                                            (data[keyData] === "Vắng") ? (
                                                <span className="dis">
                                                    {"Vắng"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }
                                        {
                                            /* status of data service*/
                                            (keyData === "status") &
                                            (data[keyData] ===
                                                "Đã hoàn thành") ? (
                                                <span className="active">
                                                    {"Đã hoàn thành"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }

                                        {
                                            /* status of data service*/
                                            (keyData === "status") &
                                            (data[keyData] ===
                                                "Đang thực hiện") ? (
                                                <span className="doing">
                                                    {"Đang thực hiện"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }

                                        {
                                            /* status of data random*/
                                            (keyData === "status") &
                                            (data[keyData] === "Đang chờ") ? (
                                                <span className="doing">
                                                    {"Đang chờ"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }
                                        {
                                            /* status of data random*/
                                            (keyData === "status") &
                                            (data[keyData] === "Đã sử dụng") ? (
                                                <span className="dis">
                                                    {"Đã sử dụng"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }
                                        {
                                            /* status of data random*/
                                            (keyData === "status") &
                                            (data[keyData] === "Bỏ qua") ? (
                                                <span className="danger">
                                                    {"Bỏ qua"}
                                                </span>
                                            ) : (
                                                ""
                                            )
                                        }

                                        {
                                            <p>
                                                {keyData === "status"
                                                    ? ""
                                                    : data[keyData]}
                                            </p>
                                        }
                                        {keyData === "service" && (
                                            <>
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
                                );
                            })}
                            {IsDetail && (
                                <th>
                                    <Link to={`/${pathDetail}/${data.id}`}>
                                        <span className="table-Link">
                                            Chi tiết
                                        </span>
                                    </Link>
                                </th>
                            )}
                            {IsUpdate && (
                                <th>
                                    <Link to={`/${pathUpdate}/${data.id}`}>
                                        <span className="table-Link">
                                            Cập nhật
                                        </span>
                                    </Link>
                                </th>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
