import React, { useContext } from "react";
import DropDown from "../../../components/DropDown";
import { stateContent } from "./AccountManager";

const Controll = () => {
    const state = useContext(stateContent);
    return (
        <div className="controlDevice">
            <div className="controlDevice-warp">
                <div className="controlDevice-warp-item">
                    <div>Tên vai trò</div>
                    <DropDown
                        up
                        selected={state.selectedActive}
                        setSelected={state.setSelectedActive}
                        options={["Tất cả", "Hoạt động", "Ngừng hoạt dộng"]}
                    />
                </div>
            </div>
            <div className="controlDevice-warp-item controlDevice-warp-search">
                <div>Từ khóa</div>
                <div className="controlDevice-warp-item_search">
                    <input type="text" placeholder="Nhập từ khóa " />
                    <i className="bx bx-search-alt-2"></i>
                </div>
            </div>
        </div>
    );
};

export default Controll;
