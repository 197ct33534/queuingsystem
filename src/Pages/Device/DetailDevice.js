import React from "react";
import { useParams, Link } from "react-router-dom";
import { Equipments } from "../../Assets/fakeData/equipData";
import HeaderInfo from "../Home/HeaderInfo";

const DetailDevice = () => {
    const { id } = useParams();
    const data = Equipments.find((item) => item.id === id);
    const detail = [
        { display: "Mã thiết bị", key: "id" },
        { display: "Loại thiết bị", key: "typeDevice" },
        { display: "Tên thiết bị", key: "name" },
        { display: "Tên đăng nhập", key: "Account" },
        { display: "Địa chỉ IP", key: "ipAddress" },
        { display: "Mật khẩu", key: "passWord" },
        { display: "Dịch vụ sử dụng", key: "service" },
    ];
    return (
        <div className="deviceManager">
            <HeaderInfo
                title="Chi tiết thiết bị"
                task={["Thiết bi", "Danh sách thiết bị", ""]}
            />
            <div className="deviceManager-tittle">Quản lý thiết bị</div>
            <div className="deviceManager-warp">
                <div className="formAddDevice detailDevice">
                    <div className="detailDevice-title">Thông tin thiết bị</div>
                    <div className="grid-col-2 detailDevice-gap">
                        {detail.map((item, key) => (
                            <div className="detailDevice-item" key={key}>
                                <div className="detailDevice-item_label">
                                    {item.display}:
                                </div>
                                <div className="detailDevice-item_content">
                                    {data[item.key]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to={`/update/${id}`}>
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">
                            <i className="bx bxs-pencil"></i>
                        </div>
                        Cập nhật thiết bị
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DetailDevice;
