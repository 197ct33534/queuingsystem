import equipment from "../images/monitor.png";
import service from "../images/equiment.png";
import random from "../images/random.png";
export const dataCircle = [
    {
        color: "#FF7506",
        color2: "#7E7D88",
        color3: "#EAEAEC",
        type: 1,
        active: 3799,
        noactive: 422,
        icon: equipment,
    },
    {
        color: "#4277FF",
        color2: "#7E7D88",
        color3: "#EAEAEC",

        type: 1,
        active: 221,
        noactive: 60,
        icon: service,
    },
    {
        color: "#35C75A",
        color2: "#7E7D88",
        color3: "#EAEAEC",
        color4: "#F178B6",
        type: 2,
        active: 4013,
        noactive: 468,
        skip: 32,
        icon: random,
    },
];
export const dataFunc = (arraydata, arrayColor) => ({
    datasets: [
        {
            data: arraydata,
            backgroundColor: arrayColor,
            hoverBackgroundColor: arrayColor,
        },
    ],
});
export const option = {
    legend: {
        display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    // tooltips: {
    //     callbacks: {
    //         label: function (tooltipItem, data) {
    //             var dataset = data.datasets[tooltipItem.datasetIndex];
    //             var meta = dataset._meta[Object.keys(dataset._meta)[0]];
    //             var total = meta.total;
    //             var currentValue = dataset.data[tooltipItem.index];
    //             var percentage = parseFloat(
    //                 ((currentValue / total) * 100).toFixed(1)
    //             );
    //             return currentValue + " (" + percentage + "%)";
    //         },
    //         title: function (tooltipItem, data) {
    //             return data.labels[tooltipItem[0].index];
    //         },
    //     },
    // },
};
