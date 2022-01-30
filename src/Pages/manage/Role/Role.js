import React from "react";
import { Link } from "react-router-dom";
import { roleData } from "../../../Assets/fakeData/SettingData";
import Table from "../../../components/Table";
import HeaderInfo from "../../Home/HeaderInfo";
import Search from "./Search";

const Role = () => {
    let memory = localStorage.getItem("manageRole")
        ? JSON.parse(localStorage.getItem("manageRole"))
        : [];
    return (
        <div className="manage">
            <HeaderInfo
                title={"Quản lý vai trò"}
                task={["Cài đặt hệ thống", ""]}
            />
            <div className="deviceManager-tittle">Danh sách vai trò</div>

            <Search />

            <div className="manage-warpTable">
                <Table
                    datas={[...memory, ...roleData]}
                    tittleHeaders={["Tên vai trò", "Số người dùng", "Mô tả"]}
                    keyDatas={["nameRole", "numberPeople", "descRole"]}
                    IsUpdate
                    pathUpdate={"manage/role/update"}
                />
                <Link to="/manage/role/add">
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">+</div>
                        Thêm vai trò
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Role;
