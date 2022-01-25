import React, { createContext, useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Controller from "./Controller";
import { useParams, Link } from "react-router-dom";
import { serviceData } from "../../Assets/fakeData/ServiceData";
import { stateServiceContent } from "./ServiceManager";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Back from "../../Assets/images/back.png";
const DetailService = () => {
    const { id } = useParams();
    const data = serviceData.find((item) => id === item.id);

    const [selectedActive, setSelectedActive] = useState("Tất cả");

    let Datas = [...serviceData];
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(8);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    // get current row
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = Datas.slice(indexOfFirstRow, indexOfLastRow);

    return (
        <div className="ServiceManager">
            <HeaderInfo
                task={["Dịch vụ", "Danh sách dịch vụ", ""]}
                title="Chi tiết"
            />
            <div className="deviceManager-tittle">Quản lý dịch vụ</div>
            <div className="BodyDetailService">
                <div className="DetailService">
                    <div className="DetailService-left">
                        <div className="DetailService-left_tittle">
                            Thông tin dịch vụ
                        </div>
                        <div className="DetailService-left_row">
                            <div className="grid-col-3">
                                <span className="DetailService-label">
                                    Mã dịch vụ:
                                </span>
                                <span className="DetailService-content">
                                    {data.id}
                                </span>
                                <span className="DetailService-label">
                                    Tên dịch vụ:
                                </span>
                                <span className="DetailService-content">
                                    {data.name}
                                </span>
                                <span className="DetailService-label">
                                    Mô tả:
                                </span>
                                <span className="DetailService-content">
                                    {data.des}
                                </span>
                            </div>
                            <div className="DetailService-left_tittle">
                                Quy tắc cấp số
                            </div>
                            <div className="grid-col-3 padding">
                                <span className="DetailService-label">
                                    Tăng tự động:
                                </span>
                                <span className="DetailService-content">
                                    <span className="DetailService-number">
                                        0001
                                    </span>{" "}
                                    đến{" "}
                                    <span className="DetailService-number">
                                        9999
                                    </span>
                                </span>

                                <span className="DetailService-label">
                                    Prefix:
                                </span>
                                <span className="DetailService-content">
                                    <span className="DetailService-number">
                                        0001
                                    </span>
                                </span>
                            </div>
                            <div className="DetailService-label margin">
                                Reset mỗi ngày
                            </div>
                            <div className="DetailService-content margin">
                                Ví dụ: 201-2001
                            </div>
                        </div>
                    </div>
                    <div className="DetailService-right">
                        <div className="DetailService-control">
                            <stateServiceContent.Provider
                                value={{ selectedActive, setSelectedActive }}
                            >
                                <Controller />
                            </stateServiceContent.Provider>
                        </div>
                        <div className="DetailService-table">
                            <Table
                                datas={currentRows}
                                tittleHeaders={["Số thứ tự", "Trạng thái"]}
                                keyDatas={["id", "active"]}
                            />
                        </div>
                        <Pagination
                            totalDatas={serviceData.length}
                            numRowInPage={numRowInPage}
                            currentPerPage={currentPerPage}
                            maxPageNumberLimit={maxPageNumberLimit}
                            minPageNumberLimit={minPageNumberLimit}
                            pageNumberLimit={pageNumberLimit}
                            setCurrentPerPage={setCurrentPerPage}
                            setmaxPageNumberLimit={setmaxPageNumberLimit}
                            setminPageNumberLimit={setminPageNumberLimit}
                        />
                    </div>
                </div>
                <div className="DetailService-Link">
                    <Link to="">
                        <div className="deviceManager-add">
                            <div className="deviceManager-add_icon">
                                {" "}
                                <i className="bx bxs-pencil"></i>
                            </div>
                            Cập nhật danh sách
                        </div>
                    </Link>
                    <Link to="">
                        <div className="deviceManager-add">
                            <div className="deviceManager-add_icon">
                                <img src={Back} alt="" />
                            </div>
                            Quay lại
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailService;
