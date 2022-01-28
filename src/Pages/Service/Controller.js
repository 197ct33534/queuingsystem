import React, { useContext } from "react";
import DropDown from "../../components/DropDown";
import { stateServiceContent } from "./ServiceManager";
// import Datepicker from "../../components/Datepicker";
const Controller = ({ detail }) => {
    const state = useContext(stateServiceContent);
    return (
        <div className="controlDevice controlService">
            <div className="controlDevice-warp controlService-warp">
                <div className="controlDevice-warp-item">
                    <div>Trạng thái hoạt động</div>
                    <DropDown
                        up
                        selected={state.selectedActive}
                        setSelected={state.setSelectedActive}
                        options={
                            detail
                                ? [
                                      "Tất cả",
                                      "Đã hoàn thành",
                                      "Đang thực hiện",
                                      "Vắng",
                                  ]
                                : ["Tất cả", "Hoạt động", "Ngừng hoạt dộng"]
                        }
                    />
                </div>
                <div className="controlDevice-warp-item">
                    <div>Chọn thời gian</div>
                    <div className="service-date-warp">
                        <span className="service-date-item">
                            <i className="bx bx-calendar"></i>
                            <span>10/10/2021</span>
                        </span>
                        <i className="bx bx-caret-right service-date_iconRight"></i>
                        <span className="service-date-item">
                            <i className="bx bx-calendar"></i>
                            <span>18/10/2021</span>
                        </span>
                    </div>
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

export default Controller;
