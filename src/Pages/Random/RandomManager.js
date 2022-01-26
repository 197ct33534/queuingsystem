import React, { createContext, useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import ControlRandom from "./ControlRandom";
import Table from "../../components/Table";
import { RandomNumberData } from "../../Assets/fakeData/RandomNumbderData";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
export const stateContent = createContext();
const RandomManager = () => {
    const [nameService, setNameService] = useState("Tất cả");
    const [status, setStatus] = useState("Tất cả");
    const [origin, setOrigin] = useState("Tất cả");
    let Datas = [...RandomNumberData];
    //filter status
    if (status !== "Tất cả") {
        Datas = Datas.filter((item) => item.status === status);
    }
    //filter origin
    if (origin !== "Tất cả") {
        Datas = Datas.filter((item) => item.origin === origin);
    }
    //filter nameService
    if (nameService !== "Tất cả") {
        Datas = Datas.filter((item) => item.nameService === nameService);
    }

    //pagination
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(9);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = Datas.slice(indexOfFirstRow, indexOfLastRow);
    return (
        <div className="deviceManager random">
            <HeaderInfo title={"Danh sách cấp số"} task={["Cấp số", ""]} />
            <div className="deviceManager-tittle">Quản lý cấp số</div>
            <stateContent.Provider
                value={{
                    nameService,
                    setNameService,
                    status,
                    setStatus,
                    origin,
                    setOrigin,
                }}
            >
                <ControlRandom />
            </stateContent.Provider>
            <div className="service-warp">
                <Table
                    datas={currentRows}
                    tittleHeaders={[
                        "STT",
                        "Tên khách hàng",
                        "Tên dịch vụ",
                        "Thời gian cấp",
                        "Hạn sử dụng",
                        "Trạng thái",
                        "Nguồn cấp",
                    ]}
                    IsDetail
                    pathDetail={"equipment/detailRandom"}
                    keyDatas={[
                        "id",
                        "nameCustomer",
                        "nameService",
                        "fromDate",
                        "toDate",
                        "status",
                        "origin",
                    ]}
                />
                <Link to="add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Cấp số mới
                    </div>
                </Link>
            </div>
            <Pagination
                totalDatas={RandomNumberData.length}
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

export default RandomManager;
