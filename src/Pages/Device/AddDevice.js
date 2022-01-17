import React from "react";
import HeaderInfo from "../Home/HeaderInfo";
import FormAddDevice from "./FormAddDevice";
const AddDevice = () => {
    return (
        <div className="deviceManager">
            <HeaderInfo
                title={"Thêm thiết bị"}
                task={["Thiết bị", "Danh sách thiết bị", ""]}
            />
            <div className="deviceManager-tittle">Danh sách thiết bị</div>

            <FormAddDevice />
        </div>
    );
};

export default AddDevice;
