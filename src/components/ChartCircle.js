import React from "react";

import { Doughnut } from "react-chartjs-2";

const ChartCircle = ({ option, dataFunc, arraydata, arraycolor }) => {
    return (
        <Doughnut
            options={option}
            data={dataFunc(arraydata, arraycolor)}
        ></Doughnut>
    );
};
export default ChartCircle;
