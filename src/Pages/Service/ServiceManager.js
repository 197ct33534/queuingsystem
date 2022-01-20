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
    // get current row
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = Datas.slice(indexOfFirstRow, indexOfLastRow);
    // events
    const handleClickPagination = (num) => {
        setCurrentPerPage(num);
    };
    const handleClickNextPagine = () => {
        if (currentPerPage + 1 > Math.ceil(serviceData.length / numRowInPage)) {
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
                    pathUpdate={"updateService"}
                    IsDetail
                    pathDetail={"detailService"}
                    keyDatas={["id", "name", "des", "active"]}
                />
                <Link to="/addService">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm dịch vụ
                    </div>
                </Link>
            </div>
            <Pagination
                totalDatas={serviceData.length}
                numRowInPage={numRowInPage}
                handleClickPagination={handleClickPagination}
                currentPerPage={currentPerPage}
                handleClickNextPagine={handleClickNextPagine}
                handleClickPrevPagine={handleClickPrevPagine}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
            />
        </div>
    );
};

export default ServiceManager;
