import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import Button from "../../components/Button";
const FormAddDevice = () => {
    const FillInfors = [
        {
            display: "Mã thiết bị",
            type: "input",
        },
        {
            display: "Loại thiết bị",
            type: "dropdown",
            value: ["Kiosk", "Display counter"],
        },
        {
            display: "Tên thiết bị",
            type: "input",
        },
        {
            display: "Tên đăng nhập",
            type: "input",
        },
        {
            display: "Địa chỉ IP",
            type: "input",
        },
        {
            display: "Mật khẩu",
            type: "input",
        },
        {
            display: "Dịch vụ sử dụng",
            type: "input",
        },
    ];
    const [selected, setSelected] = useState("Chọn loại thiết bị");
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
                                <input
                                    type={
                                        fill.display === "Mật khẩu"
                                            ? "password"
                                            : "text"
                                    }
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
                <Button
                    type="button"
                    buttonStyle="btn--warning--outline"
                    buttonSize="btn--large"
                >
                    Hủy bỏ
                </Button>
                <Button
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--large"
                >
                    Thêm thiết bị
                </Button>
            </div>
        </>
    );
};

export default FormAddDevice;
