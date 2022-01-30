import React, { useState } from "react";
import HeaderInfo from "../../Home/HeaderInfo";
import Form from "./Form";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { roleData } from "../../../Assets/fakeData/SettingData";

const FormRole = ({ update }) => {
    const { id } = useParams();
    const data = roleData.find((item) => String(item.id) === id);
    const [roleState, setRoleState] = useState({
        nameRole: update ? data.nameRole : "",
        descRole: update ? data.descRole : "",
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        setRoleState({
            ...roleState,
            [evt.target.name]: value,
        });
    };
    //submit => save localStorage
    const handleSubmit = () => {
        let memory = localStorage.getItem("manageRole")
            ? JSON.parse(localStorage.getItem("manageRole"))
            : [];
        memory.splice(0, 0, roleState);
        localStorage.setItem("manageRole", JSON.stringify(memory));
    };
    return (
        <div className="manage">
            <HeaderInfo
                title={update ? "Cập nhật vai trò" : "Thêm vai trò"}
                task={["Cài đặt hệ thống", "Quản lý vai trò", ""]}
            />
            <div className="deviceManager-tittle">Danh sách vai trò</div>
            <Form roleState={roleState} handleChange={handleChange} />
            <div className="controll-btn">
                <Link to="/manage/role">
                    <Button
                        type="button"
                        buttonStyle="btn--warning--outline"
                        buttonSize="btn--large"
                    >
                        Hủy bỏ
                    </Button>
                </Link>
                <Link to="/manage/role" onClick={handleSubmit}>
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--large"
                    >
                        {!update ? "Thêm " : "Cập nhật"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FormRole;
