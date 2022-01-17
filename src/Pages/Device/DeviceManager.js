import React, { useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import ControlDevice from "./ControlDevice";
import Table from "../../components/Table";
import { Equipments, tittleEquipments } from "../../Assets/fakeData/equipData";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
const DeviceManager = () => {
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(9);
    // get current row
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = Equipments.slice(indexOfFirstRow, indexOfLastRow);
    // events
    const handleClickPagination = (num) => {
        setCurrentPerPage(num);
    };
    const handleClickNextPagine = () => {
        if (currentPerPage === Math.ceil(Equipments.length / numRowInPage))
            setCurrentPerPage(1);
        else setCurrentPerPage((prev) => prev + 1);
    };
    const handleClickPrevPagine = () => {
        if (currentPerPage === 1)
            setCurrentPerPage(Math.ceil(Equipments.length / numRowInPage));
        else setCurrentPerPage((prev) => prev - 1);
    };
    return (
        <div className="deviceManager">
            <HeaderInfo title={"Danh sách thiết bị"} task={["Thiết bị", ""]} />
            <div className="deviceManager-tittle">Danh sách thiết bị</div>
            <ControlDevice />
            <div className="warp-table">
                <Table titleHeaders={tittleEquipments} datas={currentRows} />
                <Pagination
                    totalDatas={Equipments.length}
                    numRowInPage={numRowInPage}
                    handleClickPagination={handleClickPagination}
                    currentPerPage={currentPerPage}
                    handleClickNextPagine={handleClickNextPagine}
                    handleClickPrevPagine={handleClickPrevPagine}
                />
                <Link to="/add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm thiết bị
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DeviceManager;
