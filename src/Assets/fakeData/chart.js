import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Chart = () => {
    const data = [
        {
            date: 1,
            numberDate: 2800,
        },
        {
            date: 13,
            numberDate: 3221,
        },
        {
            date: 19,
            numberDate: 4221,
        },
        {
            date: 31,
            numberDate: 3900,
        },
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={740}
                    height={48}
                    data={data}
                    backgroundColor
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal="true" vertical="" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="numberDate"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Chart;
