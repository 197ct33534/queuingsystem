import React from "react";
import FormAddDevice from "../../Device/FormAddDevice";
import HeaderInfo from "../../Home/HeaderInfo";
import FormAddAccount from "./FormAddAccount";

const AddAccount = () => {
    return (
        <div className="deviceManager">
            <HeaderInfo
                title={"Thêm tài khoản"}
                task={["Cài đặt hệ thống", "Quản lý tài khoản", ""]}
            />
            <div className="deviceManager-tittle">Quản lí tài khoản</div>

            <FormAddAccount />
        </div>
    );
};

export default AddAccount;
