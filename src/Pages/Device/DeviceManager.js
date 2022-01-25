import React, { useState, createContext } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import ControlDevice from "./ControlDevice";
import Table from "../../components/Table";
import { Equipments } from "../../Assets/fakeData/equipData";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

export const stateContent = createContext();
const DeviceManager = () => {
    // localStorage data
    const memory = localStorage.getItem("addDevice")
        ? JSON.parse(localStorage.getItem("addDevice"))
        : [];
    const keyArray = Object.keys(Equipments[0]);
    const dataLocalStorage = memory.map((item) => {
        Object.keys(item).map((key) => {
            if (!keyArray.includes(key)) {
                delete item[key];
            }
            return item;
        });
        return item;
    });

    // state
    const [selectedActive, setSelectedActive] = useState("Tất cả");
    const [selectedConnect, setSelectedConect] = useState("Tất cả");

    let Datas = [...Equipments, ...dataLocalStorage];
    if (selectedActive !== "Tất cả") {
        if (selectedActive === "Hoạt động") {
            Datas = Datas.filter((Equipment) => Equipment.active === true);
        } else {
            Datas = Datas.filter((Equipment) => Equipment.active === false);
        }
    }
    if (selectedConnect !== "Tất cả") {
        if (selectedConnect === "Kết nối") {
            Datas = Datas.filter((Equipment) => Equipment.connect === true);
        } else {
            Datas = Datas.filter((Equipment) => Equipment.connect === false);
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

    return (
        <div className="deviceManager">
            <HeaderInfo title={"Danh sách thiết bị"} task={["Thiết bị", ""]} />
            <div className="deviceManager-tittle">Danh sách thiết bị</div>
            <stateContent.Provider
                value={{
                    selectedActive,
                    selectedConnect,
                    setSelectedActive,
                    setSelectedConect,
                }}
            >
                {" "}
                <ControlDevice />
            </stateContent.Provider>

            <div className="warp-table">
                <Table
                    datas={currentRows}
                    IsDetail
                    pathDetail={"equipment/detail"}
                    IsUpdate
                    pathUpdate={"equipment/update"}
                    tittleHeaders={[
                        "Mã thiết bị",
                        "Tên thiết bị",
                        "Địa chỉ IP",
                        "Trạng thái hoạt động",
                        "Trạng thái kết nối",
                        "Dịch vụ sử dụng",
                    ]}
                    keyDatas={[
                        "id",
                        "name",
                        "ipAddress",
                        "active",
                        "connect",
                        "service",
                    ]}
                />

                <Link to="/equipment/add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm thiết bị
                    </div>
                </Link>
            </div>
            <Pagination
                totalDatas={Datas.length}
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

export default DeviceManager;
