import React, { useState } from "react";
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
    const data = serviceData.find((item) => id === String(item.id));

    const [selectedActive, setSelectedActive] = useState("Tất cả");

    let Datas = [];
    for (let i = Number(data.fromIncrese); i <= Number(data.toIncrese); i++) {
        Datas.push({
            id: Number(id + "0000") + i,
            status:
                Math.floor(Math.random() * 10) > 6
                    ? "Đang thực hiện"
                    : Math.floor(Math.random() * 10) / 2 > 3
                    ? "Đã hoàn thành"
                    : "Vắng",
        });
    }

    if (selectedActive !== "Tất cả") {
        Datas = Datas.filter((item) => item.status === selectedActive);
    }

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
                                    {data.nameService}
                                </span>
                                <span className="DetailService-label">
                                    Mô tả:
                                </span>
                                <span className="DetailService-content">
                                    {data.descService}
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
                                        {data.fromIncrese}
                                    </span>
                                    đến
                                    <span className="DetailService-number">
                                        {data.toIncrese}
                                    </span>
                                </span>

                                <span className="DetailService-label">
                                    Prefix:
                                </span>
                                <span className="DetailService-content">
                                    <span className="DetailService-number">
                                        {data.prefix}
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
                                <Controller detail />
                            </stateServiceContent.Provider>
                        </div>
                        <div className="DetailService-table">
                            <Table
                                datas={currentRows}
                                tittleHeaders={["Số thứ tự", "Trạng thái"]}
                                keyDatas={["id", "status"]}
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
                    <Link to={`/service/update/${id}`}>
                        <div className="deviceManager-add">
                            <div className="deviceManager-add_icon">
                                {" "}
                                <i className="bx bxs-pencil"></i>
                            </div>
                            Cập nhật danh sách
                        </div>
                    </Link>
                    <Link to="/service">
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
