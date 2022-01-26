import React, { useContext } from "react";
import DropDown from "../../components/DropDown";
import { stateContent } from "./RandomManager";

const ControlRandom = () => {
    const state = useContext(stateContent);
    return (
        <div className="controlDevice controlService">
            <div className="controlDevice-warp controlService-warp">
                <div className="controlDevice-warp-item">
                    <div>Tên dịch vụ</div>
                    <DropDown
                        scroll
                        up
                        selected={state.nameService}
                        setSelected={state.setNameService}
                        options={[
                            "Tất cả",
                            "Khám tim mạch",
                            "Khám sản - Phụ Khoa",
                            "Khám răng hàm mặt",
                            "Khám tai mũi họng",
                            "Khám hô hấp",
                            "Khám tổng quát",
                        ]}
                    />
                </div>
                <div className="controlDevice-warp-item">
                    <div>Tình trạng</div>
                    <DropDown
                        up
                        selected={state.status}
                        setSelected={state.setStatus}
                        options={["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"]}
                    />
                </div>

                <div className="controlDevice-warp-item">
                    <div>Nguồn cấp</div>
                    <DropDown
                        up
                        selected={state.origin}
                        setSelected={state.setOrigin}
                        options={["Tất cả", "Kiosk", "Hệ thống"]}
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

export default ControlRandom;
