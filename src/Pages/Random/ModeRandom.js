import React from "react";

const ModeRandom = ({ setMouted }) => {
    console.log(setMouted);
    return (
        <div className="Model">
            <div className="ModeRandom">
                <div className="ModeRandom-top">
                    <div className="ModeRandom-top_title">
                        Số thứ tự được cấp
                    </div>
                    <div className="ModeRandom-top_number">2001201</div>
                    <div className="ModeRandom-top_content">
                        DV: Khám răng hàm mặt (tại quầy số 1)
                    </div>
                </div>
                <div className="ModeRandom-bot">
                    <div className="ModeRandom-bot_title">
                        Thời gian cấp: 09:30 11/10/2021
                    </div>
                    <div className="ModeRandom-bot_title">
                        Hạn sử dụng: 17:30 11/10/2021
                    </div>
                </div>
                <i
                    className="bx bx-x ModeRandom-exit"
                    onClick={() => setMouted(false)}
                ></i>
            </div>
        </div>
    );
};

export default ModeRandom;
