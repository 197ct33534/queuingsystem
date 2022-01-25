import React, { useState, createContext } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Controller from "./Controller";
import Table from "../../components/Table";
import { serviceData } from "../../Assets/fakeData/ServiceData";
import Pagination from "../../components/Pagination";

import { Link } from "react-router-dom";
export const stateServiceContent = createContext();

const ServiceManager = () => {
    const [selectedActive, setSelectedActive] = useState("Tất cả");
    let Datas = [...serviceData];
    if (selectedActive !== "Tất cả") {
        if (selectedActive === "Hoạt động") {
            Datas = serviceData.filter((service) => service.active === true);
        } else {
            Datas = serviceData.filter((service) => service.active === false);
        }
    }
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(9);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = Datas.slice(indexOfFirstRow, indexOfLastRow);
    return (
        <div className="ServiceManager">
            <HeaderInfo title={"Danh sách dịch vụ"} task={["Dịch vụ", ""]} />
            <div className="deviceManager-tittle">Quản lý dịch vụ</div>

            <stateServiceContent.Provider
                value={{
                    selectedActive,

                    setSelectedActive,
                }}
            >
                {" "}
                <Controller />
            </stateServiceContent.Provider>
            <div className="service-warp">
                <Table
                    datas={currentRows}
                    tittleHeaders={[
                        "Mã dịch vụ",
                        "Tên dịch vụ",
                        "Mô tả",
                        "Trạng thái hoạt động",
                    ]}
                    IsUpdate
                    pathUpdate={"service/update"}
                    IsDetail
                    pathDetail={"service/detail"}
                    keyDatas={["id", "name", "des", "active"]}
                />
                <Link to="/service/add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm dịch vụ
                    </div>
                </Link>
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
    );
};

export default ServiceManager;
