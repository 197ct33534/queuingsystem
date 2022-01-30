import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import HeaderInfo from "../../Home/HeaderInfo";
import { userData } from "../../../Assets/fakeData/SettingData";
import Control from "./Control";
const UserManager = () => {
    let Datas = [...userData];
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
            <HeaderInfo
                title={"Quản lý tài khoản"}
                task={["Cài đặt hệ thống", ""]}
            />
            <div className="deviceManager-tittle">Danh sách tài khoản</div>
            <Control />
            <div className="warp-table">
                <Table
                    datas={currentRows}
                    tittleHeaders={[
                        "Tên đăng nhập",
                        "Thời gian tác động",
                        "IP thực hiện",
                        "Thao tác thực hiện",
                    ]}
                    keyDatas={["nameUser", "timeUser", "ipUser", "operation"]}
                />
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

export default UserManager;
