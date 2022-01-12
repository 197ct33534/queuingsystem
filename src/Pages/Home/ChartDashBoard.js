import React from "react";
import DashboardRight from "../HomeRight/DashboardRight";
import DashboardCenter from "./DashboardCenter";
import HeaderInfo from "./HeaderInfo";
import Chart from "../../components/Chart";
const ChartDashBoard = () => {
    return (
        <div className="mainHome">
            <HeaderInfo title="Dashboard" />
            <div className="mainHome-wapper">
                <DashboardCenter />
                <Chart />
                <DashboardRight />
            </div>
        </div>
    );
};

export default ChartDashBoard;
