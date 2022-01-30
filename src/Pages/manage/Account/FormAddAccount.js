import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import DropDownSelect from "../../../components/DropDownSelect";

const FormAddAccount = ({ update, data }) => {
    const FillInfors = [
        { state: "nameUser", display: "Họ tên", type: "input" },

        {
            state: "nameAcount",
            display: "Tên đăng nhập",
            type: "input",
        },
        {
            state: "phone",
            display: "Số điện thoại",
            type: "input",
        },
        {
            state: "passWord",
            display: "Mật khẩu",
            type: "input",
        },
        {
            state: "email",
            display: "Email",
            type: "input",
        },
        {
            state: "rePassWord",
            display: "Nhập lại mật khẩu",
            type: "input",
        },
        {
            state: "typeDevice",
            display: "Vai trò",
            type: "dropdown",
            value: ["Kế toán", "Quản lý", "Admin"],
        },
        {
            state: "typeDevice",
            display: "Tình trạng",
            type: "dropdown",
            value: ["Kế toán", "Quản lý", "Admin"],
        },
    ];
    const [selected, setSelected] = useState(data ? data.typeDevice : `Chọn`);
    const ArryKeyState = FillInfors.map((Fill) => Fill.state);
    const ObjectKeyState = {};
    ArryKeyState.map((key) => {
        return (ObjectKeyState[key] = "");
    });

    const [fillState, setFillState] = useState(data ? data : ObjectKeyState);
    const handChange = (e, state) => {
        return setFillState((prev) => {
            prev[state] = e.target.value;
            return { ...prev };
        });
    };
    fillState["typeDevice"] = selected;
    const handleSubmit = (e) => {
        let memory = localStorage.getItem("addAcount")
            ? JSON.parse(localStorage.getItem("addAcount"))
            : [];

        memory.splice(0, 0, fillState);
        localStorage.setItem("addAcount", JSON.stringify(memory));
    };
    return (
        <div>
            <>
                <div className="formAddDevice">
                    <div className="formAddDevice-tittle">
                        Thông tin thiết bị
                    </div>
                    <div className="grid-col-2 formAdd-warp">
                        {FillInfors.map((fill, key) =>
                            fill.type === "input" ? (
                                <div
                                    className="formAdd-Item"
                                    key={`addacount-${key}`}
                                >
                                    <div className="formAdd-Item_title">
                                        {fill.display}: <span>*</span>
                                    </div>
                                    {update & (fill.state === "service") ? (
                                        <DropDownSelect
                                            data={[
                                                ...fillState[fill.state].split(
                                                    ","
                                                ),
                                            ]}
                                            placeholder="Tất cả"
                                        />
                                    ) : (
                                        <input
                                            required
                                            type={
                                                [
                                                    "Mật khẩu",
                                                    "Nhập lại mật khẩu",
                                                ].includes(fill.display)
                                                    ? // fill.display === "Mật khẩu"
                                                      "password"
                                                    : "text"
                                            }
                                            value={fillState[fill.state]}
                                            onChange={(e) => {
                                                return handChange(
                                                    e,
                                                    fill.state
                                                );
                                            }}
                                            placeholder={`Nhập ${fill.display.toLowerCase()}`}
                                        />
                                    )}
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
                <div className="controll-btn">
                    <Link to="/">
                        <Button
                            type="button"
                            buttonStyle="btn--warning--outline"
                            buttonSize="btn--large"
                        >
                            Hủy bỏ
                        </Button>
                    </Link>
                    <Link to="/" onClick={handleSubmit}>
                        <Button
                            type="button"
                            buttonStyle="btn--primary--solid"
                            buttonSize="btn--large"
                        >
                            {!update ? "Thêm " : "Cập nhật"}
                        </Button>
                    </Link>
                </div>
            </>
        </div>
    );
};

export default FormAddAccount;
