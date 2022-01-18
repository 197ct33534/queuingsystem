import React, { useContext } from "react";
import DropDown from "../../components/DropDown";
import { stateContent } from "../../Pages/Device/DeviceManager";
const ControlDevice = () => {
    const state = useContext(stateContent);
    return (
        <div className="controlDevice">
            <div className="controlDevice-warp">
                <div className="controlDevice-warp-item">
                    <div>Trạng thái hoạt động</div>
                    <DropDown
                        up
                        selected={state.selectedActive}
                        setSelected={state.setSelectedActive}
                        options={["Tất cả", "Hoạt động", "Ngừng hoạt dộng"]}
                    />
                </div>
                <div className="controlDevice-warp-item">
                    <div>Trạng thái kết nối</div>
                    <DropDown
                        up
                        selected={state.selectedConnect}
                        setSelected={state.setSelectedConect}
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
