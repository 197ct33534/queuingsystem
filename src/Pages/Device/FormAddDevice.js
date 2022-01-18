import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const FormAddDevice = ({ update, data }) => {
    const FillInfors = [
        { state: "id", display: "Mã thiết bị", type: "input" },
        {
            state: "typeDevice",
            display: "Loại thiết bị",
            type: "dropdown",
            value: ["Kiosk", "Display counter"],
        },
        {
            state: "name",
            display: "Tên thiết bị",
            type: "input",
        },
        {
            state: "Account",
            display: "Tên đăng nhập",
            type: "input",
        },
        {
            state: "ipAddress",
            display: "Địa chỉ IP",
            type: "input",
        },
        {
            state: "passWord",
            display: "Mật khẩu",
            type: "input",
        },
        {
            state: "service",
            display: "Dịch vụ sử dụng",
            type: "input",
        },
    ];
    const [selected, setSelected] = useState(
        data ? data.typeDevice : "Chọn loại thiết bị"
    );
    const ArryKeyState = FillInfors.map((Fill) => Fill.state);
    const ObjectKeyState = {};
    ArryKeyState.map((key) => {
        return (ObjectKeyState[key] = "");
    });
    console.log("objec", ObjectKeyState);
    const [fillState, setFillState] = useState(data ? data : ObjectKeyState);
    const handChange = (e, state) => {
        return setFillState((prev) => {
            prev[state] = e.target.value;
            return { ...prev };
        });
    };
    fillState["typeDevice"] = selected;
    const handleSubmit = () => {
        let memory = localStorage.getItem("addDevice")
            ? JSON.parse(localStorage.getItem("addDevice"))
            : [];

        fillState.active = true;
        fillState.connect = true;

        memory.splice(0, 0, fillState);
        localStorage.setItem("addDevice", JSON.stringify(memory));
    };
    console.log(fillState);
    return (
        <>
            <div className="formAddDevice">
                <div className="formAddDevice-tittle">Thông tin thiết bị</div>
                <div className="grid-col-2 formAdd-warp">
                    {FillInfors.map((fill, key) =>
                        fill.type === "input" ? (
                            <div className="formAdd-Item" key={key}>
                                <div className="formAdd-Item_title">
                                    {fill.display}: <span>*</span>
                                </div>
                                {}

                                <input
                                    required
                                    type={
                                        fill.display === "Mật khẩu"
                                            ? "password"
                                            : "text"
                                    }
                                    value={fillState[fill.state]}
                                    onChange={(e) => {
                                        return handChange(e, fill.state);
                                    }}
                                    placeholder={`Nhập ${fill.display.toLowerCase()}`}
                                />
                            </div>
                        ) : (
                            <div className="formAdd-Item " key={key}>
                                <div className="formAdd-Item_title">
                                    {fill.display}: <span>*</span>
                                </div>
                                <DropDown
                                    up
                                    selected={selected}
                                    setSelected={setSelected}
                                    options={fill.value}
                                />
                            </div>
                        )
                    )}
                </div>

                <div className="formAddDevice-note">
                    <span>*</span>
                    Là trường thông tin bắt buộc
                </div>
            </div>
            <div className="formAddDevice-btn">
                <Link to="/equipment">
                    <Button
                        type="button"
                        buttonStyle="btn--warning--outline"
                        buttonSize="btn--large"
                    >
                        Hủy bỏ
                    </Button>
                </Link>
                <Link to="/equipment" onClick={handleSubmit}>
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--large"
                    >
                        {!update ? "Thêm thiết bị" : "Cập nhật"}
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default FormAddDevice;
