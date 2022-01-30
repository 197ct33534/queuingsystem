import React, { createContext, useState } from "react";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import HeaderInfo from "../../Home/HeaderInfo";
import Controll from "./Controll";
import { accountData } from "../../../Assets/fakeData/SettingData";
import { Link } from "react-router-dom";
export const stateContent = createContext();
const AccountManager = () => {
    const [selectedActive, setSelectedActive] = useState("Tất cả");
    let Datas = [...accountData];
    if (selectedActive !== "Tất cả") {
        if (selectedActive === "Hoạt động") {
            Datas = Datas.filter((item) => item.active === true);
        } else {
            Datas = Datas.filter((item) => item.active === false);
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
            <HeaderInfo
                title={"Quản lý tài khoản"}
                task={["Cài đặt hệ thống", ""]}
            />
            <div className="deviceManager-tittle">Danh sách tài khoản</div>
            <stateContent.Provider
                value={{ selectedActive, setSelectedActive }}
            >
                <Controll />
            </stateContent.Provider>
            <div className="warp-table">
                <Table
                    datas={currentRows}
                    IsUpdate
                    pathUpdate={"equipment/update"}
                    tittleHeaders={[
                        "Tên đăng nhập",
                        "Họ tên",
                        "Số điện thoại",
                        "Email",
                        "Vai trò",
                        "trạng thái hoạt động",
                    ]}
                    keyDatas={[
                        "nameAccount",
                        "nameUser",
                        "phone",
                        "emailAccount",
                        "jobAccount",
                        "active",
                    ]}
                />
                <Link to="/manage/account/add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm tài khoản
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

export default AccountManager;
