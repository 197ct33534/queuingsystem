import React, { useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const AddService = ({ update }) => {
    const handleSubmit = () => {
        console.log("hello");
    };
    const stateCheckbox = useState({
        autoIncrease: false,
        prefix: false,
        surfix: false,
        reset: false,
    });
    const handleCheck = (e) => {
        e.target.classList.toggle("checked");
    };
    return (
        <div className="ServiceManager">
            <HeaderInfo
                task={["Dịch vụ", "Danh sách dịch vụ", ""]}
                title="Thêm dịch vụ"
            />
            <div className="deviceManager-tittle">Quản lý dịch vụ</div>
            <div className="AddService">
                <div className="AddService-title">Thông tin dịch vụ</div>
                <div className="grid-col-2 AddService-gap">
                    <div className="AddService-inputItem">
                        <div>
                            Mã dịch vụ: <span>*</span>
                        </div>
                        <input type="text" placeholder="2001" />
                    </div>
                    <div className="AddService-inputItem AddService-inputDesc">
                        <div>Mô tả: </div>
                        <input type="text" placeholder="Mô tả dịch vụ" />
                    </div>
                    <div className="AddService-inputItem">
                        <div>
                            Tên dịch vụ: <span>*</span>
                        </div>
                        <input type="text" placeholder="Khám tim mạch" />
                    </div>
                </div>
                <div className="AddService-title">Quy tắc cấp số</div>
                <div className="AddService-checkboxItem grid-col-7">
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-autoIncrease"
                            onChange={handleCheck}
                            checked={stateCheckbox.autoIncrease}
                        />
                        <label htmlFor="AddService-checkbox-autoIncrease">
                            Tăng tự động từ:
                        </label>
                    </div>

                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder="0001"
                            className="AddService-inputNumber"
                        />
                        đến
                        <input
                            type="text"
                            placeholder="9999"
                            className="AddService-inputNumber"
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-prefix"
                        />
                        <label htmlFor="AddService-checkbox-prefix">
                            Prefix:
                        </label>
                    </div>
                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder="0001"
                            className="AddService-inputNumber"
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-surfix"
                        />
                        <label htmlFor="AddService-checkbox-surfix">
                            Surfix:
                        </label>
                    </div>
                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder="0001"
                            className="AddService-inputNumber"
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-reset"
                        />
                        <label htmlFor="AddService-checkbox-reset">
                            Reset mỗi ngày:
                        </label>
                    </div>
                </div>
                <div className="formAddDevice-note">
                    <span>*</span>
                    Là trường thông tin bắt buộc
                </div>
            </div>

            <div className="controll-btn">
                <Link to="">
                    <Button
                        type="button"
                        buttonStyle="btn--warning--outline"
                        buttonSize="btn--large"
                    >
                        Hủy bỏ
                    </Button>
                </Link>
                <Link to="" onClick={handleSubmit}>
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--large"
                    >
                        {!update ? "Thêm dịch vụ" : "Cập nhật"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default AddService;
