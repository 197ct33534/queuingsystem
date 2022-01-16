import React, { useState } from "react";
import DropDown from "../../components/DropDown";
const ControlDevice = () => {
    const [selectedActive, setSelectedActive] = useState("Tất cả");
    const [selectedConnect, setSelectedConect] = useState("Tất cả");
    return (
        <div className="controlDevice">
            <div className="controlDevice-warp">
                <div className="controlDevice-warp-item">
                    <div>Trạng thái hoạt động</div>
                    <DropDown
                        up
                        selected={selectedActive}
                        setSelected={setSelectedActive}
                        options={["Tất cả", "Hoạt động", "Ngừng hoạt dộng"]}
                    />
                </div>
                <div className="controlDevice-warp-item">
                    <div>Trạng thái kết nối</div>
                    <DropDown
                        up
                        selected={selectedConnect}
                        setSelected={setSelectedConect}
                        options={["Tất cả", "Kết nối", "Mất kết nối"]}
                    />
                </div>
            </div>
            <div className="controlDevice-warp-item">
                <div>Từ khóa</div>
                <div className="controlDevice-warp-item_search">
                    <input type="text" placeholder="Nhập từ khóa " />
                    <i className="bx bx-search-alt-2"></i>
                </div>
            </div>
        </div>
    );
};

export default ControlDevice;
