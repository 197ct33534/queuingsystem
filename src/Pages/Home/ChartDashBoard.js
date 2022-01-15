import React from "react";
import DashboardRight from "../HomeRight/DashboardRight";
import DashboardCenter from "./DashboardCenter";
import HeaderInfo from "./HeaderInfo";

const ChartDashBoard = () => {
    return (
        <div className="mainHome">
            <HeaderInfo title="Dashboard" bgcolorright="#fff" />
            <div className="mainHome-wapper">
                <DashboardCenter />

                <DashboardRight />
            </div>
        </div>
    );
};

export default ChartDashBoard;
