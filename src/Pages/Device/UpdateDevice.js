import React from "react";
import { useParams } from "react-router-dom";
import HeaderInfo from "../Home/HeaderInfo";
import FormAddDevice from "./FormAddDevice";

import { Equipments } from "../../Assets/fakeData/equipData";

const UpdateDevice = () => {
    const { id } = useParams();

    const data = Equipments.find((item) => item.id === id);

    return (
        <div>
            <div className="deviceManager">
                <HeaderInfo
                    title="Cập nhật thiết bị"
                    task={["Thiết bi", "Danh sách thiết bị", ""]}
                />
                <div className="deviceManager-tittle">Quản lý thiết bị</div>
                <FormAddDevice update data={data} />
            </div>
        </div>
    );
};

export default UpdateDevice;
