import React, { useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const AddService = ({ update }) => {
    const handleSubmit = () => {
        let memory = localStorage.getItem("addService")
            ? JSON.parse(localStorage.getItem("addService"))
            : [];

        memory.splice(0, 0, { ...infoService, ...checkBox });

        localStorage.setItem("addService", JSON.stringify(memory));
    };

    const [infoService, setInfoService] = useState({
        idService: "",
        nameService: "",
        descService: "",
        fromIncrese: "0001",
        toIncrese: "9999",
        prefix: "0001",
        surfix: "0001",
    });
    const [checkBox, stateCheckBox] = useState({
        resetCheckbox: false,
        prefixCheckbox: false,
        surfixCheckbox: false,
        fromIncreseCheckbox: false,
    });
    const handleChange = (evt) => {
        const value = evt.target.value;

        if (
            ["prefix", "surfix", "toIncrese", "fromIncrese"].includes(
                evt.target.name
            )
        ) {
            stateCheckBox({
                ...checkBox,
                [evt.target.name + "Checkbox"]: value.length < 1 ? false : true,
            });
        }
        setInfoService({
            ...infoService,
            [evt.target.name]: value,
        });
    };

    function handleChangeCheckbox(evt) {
        const value =
            evt.target.type === "checkbox"
                ? evt.target.checked
                : evt.target.value;
        stateCheckBox({
            ...checkBox,
            [evt.target.name]: value,
        });
    }

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
                        <input
                            type="text"
                            placeholder="2001"
                            name="idService"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-inputItem AddService-inputDesc">
                        <div>Mô tả: </div>
                        <input
                            type="text"
                            placeholder="Mô tả dịch vụ"
                            name="descService"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-inputItem">
                        <div>
                            Tên dịch vụ: <span>*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Khám tim mạch"
                            name="nameService"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="AddService-title">Quy tắc cấp số</div>
                <div className="AddService-checkboxItem grid-col-7">
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-autoIncrease"
                            name="fromIncreseCheckbox"
                            checked={checkBox.fromIncreseCheckbox}
                            onChange={handleChangeCheckbox}
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
                            name="fromIncrese"
                            onChange={handleChange}
                        />
                        đến
                        <input
                            type="text"
                            placeholder="9999"
                            className="AddService-inputNumber"
                            name="toIncrese"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-prefix"
                            name="prefixCheckbox"
                            checked={checkBox.prefixCheckbox}
                            onChange={handleChangeCheckbox}
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
                            name="prefix"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-surfix"
                            name="surfixCheckbox"
                            checked={checkBox.surfixCheckbox}
                            onChange={handleChangeCheckbox}
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
                            name="surfix"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            id="AddService-checkbox-reset"
                            name="resetCheckbox"
                            checked={checkBox.resetCheckbox}
                            onChange={handleChangeCheckbox}
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
