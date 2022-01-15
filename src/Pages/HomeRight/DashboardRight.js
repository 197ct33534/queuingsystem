import React from "react";
import ChartCircle from "../../components/ChartCircle";

import {
    dataCircle,
    dataFunc,
    option,
} from "../../Assets/configChart/chartCircleData";
const DashboardRight = () => {
    return (
        <div className="dashboard-right">
            <div className="dashboard-right-tittle">Tổng quan</div>

            {dataCircle.map((item, index) => (
                <div className="dashboard-right-chartItem" key={index}>
                    <div className="dashboard-right-chartItem-left">
                        <div className="dashboard-right-chartItem_circleWarp">
                            <div className="dashboard-right-chartItem_circle1">
                                <ChartCircle
                                    option={option}
                                    arraydata={[item.active, item.noactive]}
                                    arraycolor={[item.color, item.color3]}
                                    dataFunc={dataFunc}
                                />
                            </div>
                            <div className="dashboard-right-chartItem_circle2">
                                <ChartCircle
                                    option={option}
                                    arraydata={[item.noactive, item.active]}
                                    arraycolor={[item.color2, item.color3]}
                                    dataFunc={dataFunc}
                                />
                            </div>
                            {item.type && (
                                <div className="dashboard-right-chartItem_circle3">
                                    <ChartCircle
                                        option={option}
                                        arraydata={[item.skip, item.noactive]}
                                        arraycolor={[item.color4, item.color3]}
                                        dataFunc={dataFunc}
                                    />
                                </div>
                            )}
                            <div className="dashboard-right-chartItem_numPrecent">
                                {Math.floor(
                                    (item.active /
                                        (item.noactive + item.active)) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className="dashboard-right-chartItem_quantilyWarp">
                            <p>
                                {item.active +
                                    item.noactive +
                                    (item.skip ? item.skip : 0)}
                            </p>
                            <div>
                                <img src={item.icon} alt="" />
                                <span style={{ color: item.color }}>
                                    Thiết bị
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-right-chartItem_listedWarp">
                        <div className="dashboard-right-chartItem_listedItem">
                            <div className="warpDot">
                                <span
                                    style={{ backgroundColor: item.color }}
                                ></span>
                                {item.type === 1
                                    ? "Đang hoạt động"
                                    : "Đã sử dụng"}
                            </div>

                            <span style={{ color: item.color }}>
                                {item.active}
                            </span>
                        </div>
                        <div className="dashboard-right-chartItem_listedItem">
                            <div className="warpDot">
                                <span
                                    style={{ backgroundColor: item.color2 }}
                                ></span>{" "}
                                {item.type === 1
                                    ? "Ngưng hoạt động"
                                    : "Đang chờ"}
                            </div>

                            <span style={{ color: item.color }}>
                                {item.noactive}
                            </span>
                        </div>
                        {item.skip && (
                            <div className="dashboard-right-chartItem_listedItem">
                                <div className="warpDot">
                                    <span
                                        style={{ backgroundColor: item.color4 }}
                                    ></span>{" "}
                                    Bỏ qua
                                </div>

                                <span style={{ color: item.color }}>
                                    {item.skip}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardRight;
